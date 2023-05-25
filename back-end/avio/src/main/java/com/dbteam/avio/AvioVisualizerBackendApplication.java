package com.dbteam.avio;

import com.dbteam.avio.dto.PlaneDTO;
import com.dbteam.avio.dto.SeatClassDTO;
import com.dbteam.avio.dto.SeatDTO;
import com.dbteam.avio.entities.*;
import com.dbteam.avio.repositories.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class AvioVisualizerBackendApplication {
    private final PlaneRepository planeRepo;
    private final SeatClassRepository seatClassRepo;
    private final SeatRepository seatRepo;
    private final FacilityRepository facilityRepo;


    public static void main(String[] args) {
        SpringApplication.run(AvioVisualizerBackendApplication.class, args);
    }

    public AvioVisualizerBackendApplication(PlaneRepository planeRepo, SeatClassRepository seatClassRepo, SeatRepository seatRepo, FacilityRepository facilityRepo) {
        this.planeRepo = planeRepo;
        this.seatClassRepo = seatClassRepo;
        this.seatRepo = seatRepo;
        this.facilityRepo = facilityRepo;
    }

    record MapData(PlaneDTO plane,
                   List<SeatClassDTO> classes,
                   List<Facility> facilities,
                   List<SeatDTO> seats){}


    @GetMapping("/mapData/{planeId}")
    public MapData getJson(@PathVariable Long planeId) {
        Plane plane = planeRepo.findById(planeId).orElse(null);
        List<Facility> facilities = facilityRepo.getFacilitiesByPlane(plane);

        List<SeatClassDTO> classes = new ArrayList<>();
        for(SeatClass seatClass : seatClassRepo.findAllByPlane(plane) ){
            classes.add(SeatClassDTO.toSeatClassDto(seatClass));
        }

        List<SeatDTO> seats = new ArrayList<>();
        for(Seat st: seatRepo.getSeatsByPlane(plane)){
            seats.add(SeatDTO.toSeatDto(st));
        }
//        List<Seat> seats = null;

        assert plane != null;
        return new MapData(PlaneDTO.toPlaneDTO(plane), classes, facilities, seats);
    }

}
