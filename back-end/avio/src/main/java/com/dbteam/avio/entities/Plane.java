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

    @Column(columnDefinition = "LONGTEXT")
    private String svg;

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

    public String getSvg() {
        return svg;
    }

    public void setSvg(String svg) {
        this.svg = svg;
    }
}
