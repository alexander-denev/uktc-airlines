package com.dbteam.avio.entities;

import jakarta.persistence.*;
import org.locationtech.jts.geom.Point;


@Entity
@Table(name = "seat")
public class Seat {
    @EmbeddedId
    private SeatPrimaryKey id;

    @Column(name = "offset", columnDefinition = "POINT")
    private Point offset;

    private int floor;

    @ManyToOne
    @JoinColumn(name = "class")
    private SeatClass seatClass;

    @ManyToOne
//    @JoinColumn(name = "plane_id")
    @MapsId("plane_id")
    private Plane plane;

    public Seat() {
    }

    public SeatPrimaryKey getId() {
        return id;
    }

    public void setId(SeatPrimaryKey id) {
        this.id = id;
    }

    public Point getOffset() {
        return offset;
    }

    public void setOffset(Point location) {
        this.offset = location;
    }

    public SeatClass getSeatClass() {
        return seatClass;
    }

    public void setSeatClass(SeatClass seatClass) {
        this.seatClass = seatClass;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public Plane getPlane() {
        return plane;
    }

    public void setPlane(Plane plane) {
        this.plane = plane;
    }
}
