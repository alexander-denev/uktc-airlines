package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;
import lombok.Data;

@Data
public class PlaneDTO {
    private String name;
    private String visualisation;


    public PlaneDTO() {
    }

    public PlaneDTO(Plane plane) {
        this.name = plane.getModel().getName();
        this.visualisation = plane.getSvg();
    }
}
