package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;

public class PlaneSlimDTO {
    private Long id;
    private String model;

    public PlaneSlimDTO(Long id, String model) {
        this.id = id;
        this.model = model;
    }

    public PlaneSlimDTO(Plane plane){
        this.id = plane.getId();
        this.model = plane.getModel().getName();
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
}
