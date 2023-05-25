package com.dbteam.avio.entities;

import jakarta.persistence.*;

@Entity
@Table
public class Plane {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "model")
    private Model model;

    public Plane(Long id, Model model_id) {
        this.id = id;
        this.model = model_id;
    }

    public Plane() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }
}
