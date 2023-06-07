package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Seat;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class SeatSaveDTO extends SeatDTO {
    private String seatClassName;
    public SeatSaveDTO(Seat seat) {
        super(seat);
    }
}
