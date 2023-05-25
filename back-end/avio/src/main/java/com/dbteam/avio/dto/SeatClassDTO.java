package com.dbteam.avio.dto;


import com.dbteam.avio.entities.SeatClass;
import org.locationtech.jts.geom.*;

import java.util.ArrayList;
import java.util.List;

public class SeatClassDTO {
    private Long id;
    private String name;
    private PolygonDTO geometry;

    public SeatClassDTO() {
    }

    public SeatClassDTO(Long id, String name, Polygon geometry) {
        this.id = id;
        this.name = name;
        this.geometry = PolygonDTO.toPolygonDTO(geometry);
    }

    public static SeatClassDTO toSeatClassDto(SeatClass seatClass){
        return new SeatClassDTO(
                seatClass.getId(),
                seatClass.getName(),
                seatClass.getGeometry()
                );
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PolygonDTO getGeometry() {
        return geometry;
    }

    public void setGeometry(PolygonDTO geometry) {
        this.geometry = geometry;
    }

}