package com.dbteam.avio.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class SeatPrimaryKey implements Serializable {
    private int row;
    private char col;
    @Column(name = "plane_id")
    private Long plane_id;

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public char getColumn() {
        return col;
    }

    public void setColumn(char column) {
        this.col = column;
    }

    public Long getPlane_id() {
        return plane_id;
    }

    public void setPlane_id(Long plane_id) {
        this.plane_id = plane_id;
    }
}
