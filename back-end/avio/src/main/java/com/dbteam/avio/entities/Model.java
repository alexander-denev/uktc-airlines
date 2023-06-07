package com.dbteam.avio.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "model_plane")
@Getter
@Setter
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

    public Model(String name) {
        this.name = name;
    }
}
