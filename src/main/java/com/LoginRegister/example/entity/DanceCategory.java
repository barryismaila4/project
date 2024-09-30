package com.LoginRegister.example.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class DanceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "danceCategory", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<DanceStyle> danceStyles;

    // Constructeurs
    public DanceCategory() {}

    public DanceCategory(Long id, String name, List<DanceStyle> danceStyles) {
        this.id = id;
        this.name = name;
        this.danceStyles = danceStyles;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<DanceStyle> getDanceStyles() {
        return danceStyles;
    }

    public void setDanceStyles(List<DanceStyle> danceStyles) {
        this.danceStyles = danceStyles;
    }

    // toString
    @Override
    public String toString() {
        return "DanceCategory [id=" + id + ", name=" + name + ", danceStyles=" + danceStyles + "]";
    }
}
