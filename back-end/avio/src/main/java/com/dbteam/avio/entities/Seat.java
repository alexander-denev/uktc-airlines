package com.dbteam.avio.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.locationtech.jts.geom.Point;

import java.util.List;


@Entity
@Table(name = "seat")
@Getter
@Setter
public class Seat {
    @EmbeddedId
    private SeatPrimaryKey id;

    @Column(name = "offset", columnDefinition = "POINT")
    private Point offset;

    private int floor;

    private double rotation;

    @ManyToOne
//    @JoinColumn(name = "plane_id")
    @MapsId("plane_id")
    private Plane plane;

    @ManyToOne
    @JoinColumn(name = "class")
    private SeatClass seatClass;

    public Seat() {
    }
}
