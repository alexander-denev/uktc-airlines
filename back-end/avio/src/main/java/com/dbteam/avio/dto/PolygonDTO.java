package com.dbteam.avio.dto;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Polygon;

import java.util.ArrayList;
import java.util.List;

public class PolygonDTO {
    private List<PointDTO> coordinates;

    public PolygonDTO() {
    }

    public PolygonDTO(List<PointDTO> coordinates) {
        this.coordinates = coordinates;
    }

    public List<PointDTO> getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(List<PointDTO> coordinates) {
        this.coordinates = coordinates;
    }

    public static PolygonDTO toPolygonDTO(Polygon geometry) {
        if (geometry != null) {
            Coordinate[] coordinates = geometry.getCoordinates();
            List<PointDTO> pointDTOs = new ArrayList<>();
            for (Coordinate coordinate : coordinates) {
                PointDTO pointDTO = new PointDTO(coordinate.getX(), coordinate.getY());
                pointDTOs.add(pointDTO);
            }
            return new PolygonDTO(pointDTOs);
        }
        return null;
    }
}
