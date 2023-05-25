package com.dbteam.avio.entities;

import jakarta.persistence.*;
import org.locationtech.jts.geom.Polygon;

import java.util.List;

@Entity
@Table(name = "class")
public class SeatClass {

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(columnDefinition = "POLYGON")
    private Polygon geometry;
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String seatClass) {
        this.name = seatClass;
    }

    public Polygon getGeometry() {
        return geometry;
    }

    public void setGeometry(Polygon geometry) {
        this.geometry = geometry;
    }
}
