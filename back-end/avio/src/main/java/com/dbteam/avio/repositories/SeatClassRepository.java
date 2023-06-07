package com.dbteam.avio.repositories;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.SeatClass;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatClassRepository extends CrudRepository<SeatClass, Long> {
    @Query("SELECT DISTINCT c FROM SeatClass c " +
            "JOIN Seat s ON s.seatClass.id = c.id " +
            "JOIN Plane p ON s.plane.id = p.id " +
            "WHERE p = :plane")
    List<SeatClass> findAllByPlane(@Param("plane") Plane plane);

    Optional<SeatClass> findByName(String name);

}
