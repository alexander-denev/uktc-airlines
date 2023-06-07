package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Plane;
import com.dbteam.avio.entities.Seat;
import com.dbteam.avio.entities.SeatClass;
import com.dbteam.avio.entities.SeatPrimaryKey;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;

@Data
@NoArgsConstructor
public class SeatDTO {
    private int x;
    private int y;
    private double rotation;
    private int row;
    private char column;
    private int floor;


    public SeatDTO(Seat seat) {
        this.x = (int) seat.getOffset().getX();
        this.y = (int) seat.getOffset().getY();
        this.rotation = seat.getRotation();
        this.row = seat.getId().getRow();
        this.column = seat.getId().getCol();
        this.floor = seat.getFloor();
    }

    public Seat convertToSeat(Plane plane, SeatClass seatClass) {
        SeatPrimaryKey primaryKey = new SeatPrimaryKey();
        primaryKey.setRow(this.row);
        primaryKey.setCol(this.column);
        primaryKey.setPlane_id(plane.getId());

        Coordinate coordinate = new Coordinate(this.x, this.y);
        GeometryFactory geometryFactory = new GeometryFactory();
        Point offset = geometryFactory.createPoint(coordinate);

        Seat seat = new Seat();
        seat.setId(primaryKey);
        seat.setOffset(offset);
        seat.setFloor(this.floor);
        seat.setRotation(this.rotation);
        seat.setPlane(plane);
        seat.setSeatClass(seatClass);

        return seat;
    }
}
