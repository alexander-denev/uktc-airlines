package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;
import lombok.Data;

@Data
public class PlaneSlimDTO {
    private Long id;
    private String model;

    public PlaneSlimDTO(Long id, String model) {
        this.id = id;
        this.model = model;
    }

    public PlaneSlimDTO(Plane plane) {
        this.id = plane.getId();
        this.model = plane.getModel().getName();
    }
}
