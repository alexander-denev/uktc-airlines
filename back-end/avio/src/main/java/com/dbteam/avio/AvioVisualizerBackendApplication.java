package com.dbteam.avio;

import com.dbteam.avio.dto.PlaneDTO;
import com.dbteam.avio.dto.SeatClassDTO;
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


    public static void main(String[] args) {
        SpringApplication.run(AvioVisualizerBackendApplication.class, args);
    }

    public AvioVisualizerBackendApplication(PlaneRepository planeRepo, SeatClassRepository seatClassRepo, SeatRepository seatRepo) {
        this.planeRepo = planeRepo;
        this.seatClassRepo = seatClassRepo;
        this.seatRepo = seatRepo;
    }

    record MapData(List<SeatClassDTO> seats,
                   PlaneDTO airplane){}


    @GetMapping("/mapData/{planeId}")
    public MapData getJson(@PathVariable Long planeId) {
        Plane plane = planeRepo.findById(planeId).orElse(null);
        assert plane != null;


        List<SeatClassDTO> seats = new ArrayList<>();
        for(SeatClass seatClass : seatClassRepo.findAllByPlane(plane) ){
            seats.add(new SeatClassDTO(seatClass, seatRepo.getSeatsByPlaneAndSeatClass(plane, seatClass)));
        }

        return new MapData(seats, new PlaneDTO(plane));
    }

}
