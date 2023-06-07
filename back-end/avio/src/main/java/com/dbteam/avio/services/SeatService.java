package com.dbteam.avio.services;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.Seat;
import com.dbteam.avio.entities.SeatClass;
import com.dbteam.avio.repositories.SeatRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SeatService {
    private final SeatRepository repository;

    public List<Seat> getSeatsByPlaneAndSeatClass(Plane plane, SeatClass seatClass) {
        return repository.getSeatsByPlaneAndSeatClass(plane, seatClass);
    }

    public void save(Seat seat) {
        repository.save(seat);
    }
}
