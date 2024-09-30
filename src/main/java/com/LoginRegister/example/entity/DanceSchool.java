package com.LoginRegister.example.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference; // Importer JsonBackReference

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class DanceSchool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String position;
    private String horaire;

    @ManyToOne
    @JoinColumn(name = "dance_style_id")
    @JsonBackReference // Ajout de JsonBackReference ici
    private DanceStyle danceStyle;

    @OneToMany(mappedBy = "danceSchool", cascade = CascadeType.ALL)
    private List<Course> courses;

    // Constructeurs
    public DanceSchool() {}

    public DanceSchool(Long id, String name, String position, String horaire, DanceStyle danceStyle, List<Course> courses) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.horaire = horaire;
        this.danceStyle = danceStyle;
        this.courses = courses;
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

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getHoraire() {
        return horaire;
    }

    public void setHoraire(String horaire) {
        this.horaire = horaire;
    }

    public DanceStyle getDanceStyle() {
        return danceStyle;
    }

    public void setDanceStyle(DanceStyle danceStyle) {
        this.danceStyle = danceStyle;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    // toString
    @Override
    public String toString() {
        return "DanceSchool [id=" + id + ", name=" + name + ", position=" + position + ", horaire=" + horaire + ", danceStyle=" + danceStyle + ", courses=" + courses + "]";
    }
}
