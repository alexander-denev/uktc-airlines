package com.dbteam.avio.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "class")
@Getter
@Setter
public class SeatClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String svg;


    public SeatClass() {
    }
}
