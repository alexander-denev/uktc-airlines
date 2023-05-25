package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Seat;

public class SeatDTO {
    private int row;
    private char col;

    private PointDTO offset;
    private int floor;
    private Long seatClass;

    public SeatDTO(int row, char col,
                   PointDTO offset, int floor,
                   Long seatClass) {
        this.row = row;
        this.col = col;

        this.offset = offset;
        this.floor = floor;
        this.seatClass = seatClass;
    }

    public static SeatDTO toSeatDto(Seat seat){
        return new SeatDTO(
                seat.getId().getRow(),
                seat.getId().getColumn(),
                PointDTO.toPointDTO(seat.getOffset()),
                seat.getFloor(),
                seat.getSeatClass().getId()
                );
    }

    public SeatDTO() {
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public char getCol() {
        return col;
    }

    public void setCol(char col) {
        this.col = col;
    }

    public PointDTO getOffset() {
        return offset;
    }

    public void setOffset(PointDTO offset) {
        this.offset = offset;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public Long getSeatClass() {
        return seatClass;
    }

    public void setSeatClass(Long seatClass) {
        this.seatClass = seatClass;
    }


}
