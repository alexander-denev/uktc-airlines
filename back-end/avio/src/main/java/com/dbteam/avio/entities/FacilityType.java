package com.dbteam.avio.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "facility_types")
public class FacilityType {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
