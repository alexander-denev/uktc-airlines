package com.dbteam.avio.services;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.repositories.ModelRepository;
import com.dbteam.avio.repositories.PlaneRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlaneService {
    private final PlaneRepository planeRepository;
    private final ModelRepository modelRepository;


    public Plane findById(Long planeId) {
        return planeRepository.findById(planeId).orElseThrow();
    }

    public List<Plane> findAll() {
        return planeRepository.findAll();
    }

    public void savePlane(Plane plane){
        if(!modelRepository.exists(Example.of(plane.getModel()))){
            modelRepository.save(plane.getModel());
        }
        planeRepository.save(plane);
    }
}
