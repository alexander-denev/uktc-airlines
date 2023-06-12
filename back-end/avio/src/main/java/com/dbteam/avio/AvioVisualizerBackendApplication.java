package com.dbteam.avio;

import com.dbteam.avio.dto.PlaneDTO;
import com.dbteam.avio.dto.PlaneSlimDTO;
import com.dbteam.avio.dto.SeatClassDTO;
import com.dbteam.avio.dto.SeatSaveDTO;
import com.dbteam.avio.entities.Model;
import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.Seat;
import com.dbteam.avio.entities.SeatClass;
import com.dbteam.avio.services.PlaneService;
import com.dbteam.avio.services.SeatClassService;
import com.dbteam.avio.services.SeatService;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
@AllArgsConstructor
public class AvioVisualizerBackendApplication {
    private final PlaneService planeService;
    private final SeatService seatService;
    private final SeatClassService classService;


    public static void main(String[] args) {
        SpringApplication.run(AvioVisualizerBackendApplication.class, args);
    }

    @GetMapping("/mapData/{planeId}")
    public MapData getJson(@PathVariable Long planeId) {
        Plane plane = planeService.findById(planeId);
        assert plane != null;


        List<SeatClassDTO> seats = new ArrayList<>();
        for (SeatClass seatClass : classService.findAllByPlane(plane)) {
            seats.add(new SeatClassDTO(seatClass, seatService.getSeatsByPlaneAndSeatClass(plane, seatClass)));
        }

        return new MapData(seats, new PlaneDTO(plane));
    }

    @GetMapping("/planeData")
    public List<PlaneSlimDTO> getPlanes() {
        List<Plane> planes = planeService.findAll();
        List<PlaneSlimDTO> dtos = new ArrayList<>();
        planes.forEach(p -> dtos.add(new PlaneSlimDTO(p)));
        return dtos;
    }

    @PostMapping("/createPlane")
    public ResponseEntity<Void> addSeats(@RequestBody createPlaneRecord record) {

        Model model = new Model(record.planeName);

        Plane plane = new Plane();
        plane.setModel(model);
        plane.setSvg(record.planeVisualisation);
        planeService.savePlane(plane);

        for (SeatSaveDTO saveDTO : record.seats) {
            SeatClass seatClass = classService.getSeatClassByName(saveDTO.getSeatClass());
            Seat seat = saveDTO.convertToSeat(plane, seatClass);
            seatService.save(seat);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

    record MapData(List<SeatClassDTO> seats,
                   PlaneDTO airplane) {
    }

    record createPlaneRecord(
            ArrayList<SeatSaveDTO> seats,
            String planeVisualisation,
            String planeName
    ) {
    }
}
