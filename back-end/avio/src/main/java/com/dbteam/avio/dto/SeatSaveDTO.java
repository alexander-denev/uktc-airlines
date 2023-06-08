package com.dbteam.avio.dto;

import com.dbteam.avio.entities.Seat;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class SeatSaveDTO extends SeatDTO {
    private String seatClass;
    public SeatSaveDTO(Seat seat) {
        super(seat);
    }

    @Override
    public String toString() {
        return "SeatSaveDTO{" +
                "seatClass='" + seatClass + '\'' +
                "} " + super.toString();
    }
}
