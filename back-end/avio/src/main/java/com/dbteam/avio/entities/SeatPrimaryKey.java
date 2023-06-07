package com.dbteam.avio.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@Getter
@Setter
public class SeatPrimaryKey implements Serializable {
    private int row;
    private char col;
    @Column(name = "plane_id")
    private Long plane_id;
}
