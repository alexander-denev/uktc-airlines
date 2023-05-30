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
    @Column(columnDefinition = "LONGTEXT")
    private String svg;

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

    public String getSvg() {
        return svg;
    }

    public void setSvg(String svg) {
        this.svg = svg;
    }
}
