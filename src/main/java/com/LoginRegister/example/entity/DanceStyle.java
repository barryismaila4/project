package com.LoginRegister.example.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class DanceStyle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "dance_category_id")
    @JsonBackReference
    private DanceCategory danceCategory;

    @OneToMany(mappedBy = "danceStyle", cascade = CascadeType.ALL)
    private List<DanceSchool> danceSchools;

    // Constructeurs
    public DanceStyle() {}

    public DanceStyle(Long id, String name, DanceCategory danceCategory, List<DanceSchool> danceSchools) {
        this.id = id;
        this.name = name;
        this.danceCategory = danceCategory;
        this.danceSchools = danceSchools;
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

    public DanceCategory getDanceCategory() {
        return danceCategory;
    }

    public void setDanceCategory(DanceCategory danceCategory) {
        this.danceCategory = danceCategory;
    }

    public List<DanceSchool> getDanceSchools() {
        return danceSchools;
    }

    public void setDanceSchools(List<DanceSchool> danceSchools) {
        this.danceSchools = danceSchools;
    }

    // toString
    @Override
    public String toString() {
        return "DanceStyle [id=" + id + ", name=" + name + ", danceCategory=" + danceCategory + ", danceSchools=" + danceSchools + "]";
    }
}
