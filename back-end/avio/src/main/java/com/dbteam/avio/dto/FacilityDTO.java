package com.dbteam.avio.dto;

import com.dbteam.avio.entities.FacilityType;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;

import java.util.List;

public class FacilityDTO {
    private Long id;
    private FacilityType type;
    private PolygonDTO visObject;
    private PointDTO offset;

    public FacilityDTO() {
    }

    public FacilityDTO(Long id, FacilityType type, Polygon visObject, Point offset) {
        this.id = id;
        this.type = type;
        this.visObject = PolygonDTO.toPolygonDTO(visObject);
        this.offset = PointDTO.toPointDTO(offset);
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FacilityType getType() {
        return type;
    }

    public void setType(FacilityType type) {
        this.type = type;
    }

    public PolygonDTO getVisObject() {
        return visObject;
    }

    public void setVisObject(PolygonDTO visObject) {
        this.visObject = visObject;
    }

    public PointDTO getOffset() {
        return offset;
    }

    public void setOffset(PointDTO offset) {
        this.offset = offset;
    }
}
