package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Seat;

public class SeatDTO {
    private int x;
    private int y;
    private double rotation;
    private int row;
    private char column;
    private int floor;

    public SeatDTO(int x, int y, double rotation, int row, char col, int floor) {
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.row = row;
        this.column = col;
        this.floor = floor;
    }

    public SeatDTO(Seat seat){
        this.x = (int) seat.getOffset().getX();
        this.y = (int) seat.getOffset().getY();
        this.rotation = seat.getRotation();
        this.row = seat.getId().getRow();
        this.column = seat.getId().getColumn();
        this.floor = seat.getFloor();
    }

    public SeatDTO() {
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public char getColumn() {
        return column;
    }

    public void setColumn(char column) {
        this.column = column;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public double getRotation() {
        return rotation;
    }

    public void setRotation(double rotation) {
        this.rotation = rotation;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }
}
