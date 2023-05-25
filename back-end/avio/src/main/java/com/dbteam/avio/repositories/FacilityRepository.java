package com.dbteam.avio.repositories;

import com.dbteam.avio.entities.Facility;
import com.dbteam.avio.entities.Plane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacilityRepository extends JpaRepository<Facility, Long> {
    List<Facility> getFacilitiesByPlane(Plane plane);
}
