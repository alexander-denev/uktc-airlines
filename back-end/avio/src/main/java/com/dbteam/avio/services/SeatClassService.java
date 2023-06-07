package com.dbteam.avio.services;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.SeatClass;
import com.dbteam.avio.repositories.SeatClassRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SeatClassService {
    private final SeatClassRepository repository;

    public SeatClass getSeatClassByName(String seatClassName) {
        return repository.findByName(seatClassName).orElseThrow();
    }

    public List<SeatClass> findAllByPlane(Plane plane) {
        return repository.findAllByPlane(plane);
    }
}
