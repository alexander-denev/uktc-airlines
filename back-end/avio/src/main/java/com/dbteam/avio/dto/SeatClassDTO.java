package com.dbteam.avio.dto;


import com.dbteam.avio.entities.Seat;
import com.dbteam.avio.entities.SeatClass;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class SeatClassDTO {
    public List<SeatDTO> occurrences;
    private String type;
    private String visualisation;

    public SeatClassDTO(SeatClass seatClass, List<Seat> seats) {
        this.type = seatClass.getName();
        this.visualisation = seatClass.getSvg();
        this.occurrences = new ArrayList<>();
        for (Seat s :
                seats) {
            this.occurrences.add(new SeatDTO(s));
        }
    }

}