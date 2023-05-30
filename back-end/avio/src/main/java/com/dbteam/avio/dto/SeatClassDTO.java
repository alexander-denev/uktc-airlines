package com.dbteam.avio.dto;


import com.dbteam.avio.entities.SeatClass;
import com.dbteam.avio.entities.Seat;


import java.util.ArrayList;
import java.util.List;

public class SeatClassDTO {
    private String type;
    private String visualisation;
    public List<SeatDTO> occurrences;

    public SeatClassDTO(SeatClass seatClass, List<Seat> seats){
        this.type = seatClass.getName();
        this.visualisation = seatClass.getSvg();
        this.occurrences = new ArrayList<>();
        for (Seat s:
             seats) {
            this.occurrences.add(new SeatDTO(s));
        }
    }

    // Getters and setters


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getVisualisation() {
        return visualisation;
    }

    public void setVisualisation(String visualisation) {
        this.visualisation = visualisation;
    }

    public List<SeatDTO> getOccurrences() {
        return occurrences;
    }

    public void setOccurrences(List<SeatDTO> occurrences) {
        this.occurrences = occurrences;
    }
}