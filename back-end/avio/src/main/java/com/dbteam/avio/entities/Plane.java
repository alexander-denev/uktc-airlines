package com.dbteam.avio.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Plane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private Model model;

    @Column(columnDefinition = "LONGTEXT")
    private String svg;

    public Plane(Long id, Model model_id) {
        this.id = id;
        this.model = model_id;
    }

    public Plane() {
    }
}
