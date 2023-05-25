package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;

public class PlaneDTO {
    private Long id;
    private String model;

    public PlaneDTO() {
    }

    public PlaneDTO(Long id, String model) {
        this.id = id;
        this.model = model;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public static PlaneDTO toPlaneDTO(Plane plane){
        return new PlaneDTO(plane.getId(), plane.getModel().getName());
    }
}
