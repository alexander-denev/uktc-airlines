package com.dbteam.avio.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "model_plane")
public class Model {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Model(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Model() {
    }

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
