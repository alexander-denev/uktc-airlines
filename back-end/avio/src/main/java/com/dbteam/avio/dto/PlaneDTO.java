package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;

public class PlaneDTO {
    private String name;
    private String visualisation;


    public PlaneDTO() {
    }

    public PlaneDTO(Plane plane) {
        this.name = plane.getModel().getName();
        this.visualisation = plane.getSvg();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVisualisation() {
        return visualisation;
    }

    public void setVisualisation(String visualisation) {
        this.visualisation = visualisation;
    }
}
