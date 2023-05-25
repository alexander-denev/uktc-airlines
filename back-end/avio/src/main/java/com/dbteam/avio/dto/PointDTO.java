package com.dbteam.avio.dto;

import org.locationtech.jts.geom.Point;

public class PointDTO {
    private double x;
    private double y;

    public PointDTO() {
    }

    public PointDTO(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public static PointDTO toPointDTO(Point point){
        return new PointDTO(
                point.getX(),
                point.getY()
        );
    }

    // Getters and setters

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }
}
