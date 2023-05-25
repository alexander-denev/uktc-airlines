package com.dbteam.avio.entities;

import jakarta.persistence.*;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;


@Entity
@Table(name = "plane_facilities")
public class Facility {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private FacilityType type;

    @ManyToOne
    @JoinColumn(name = "plane_id")
    private Plane plane;

    @Column(name = "vis_object", columnDefinition = "POLYGON")
    private Polygon vis_object;

    @Column(name = "offset", columnDefinition = "POINT")
    private Point offset;


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public FacilityType getType() {
        return type;
    }

    public void setType(FacilityType type) {
        this.type = type;
    }

    public Plane getPlane() {
        return plane;
    }

    public void setPlane(Plane plane) {
        this.plane = plane;
    }

    public Polygon getVis_object() {
        return vis_object;
    }

    public void setVis_object(Polygon vis_object) {
        this.vis_object = vis_object;
    }

    public Point getOffset() {
        return offset;
    }

    public void setOffset(Point offset) {
        this.offset = offset;
    }
}
