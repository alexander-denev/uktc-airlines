package com.dbteam.avio.repositories;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.Seat;
import com.dbteam.avio.entities.SeatClass;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends CrudRepository<Seat, Long> {
    List<Seat> getSeatsByPlaneAndSeatClass(Plane plane, SeatClass seatClass);
}
