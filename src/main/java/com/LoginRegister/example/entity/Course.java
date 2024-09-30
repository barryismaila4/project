package com.LoginRegister.example.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String instructor;
    private String schedule;
    @Column(length = 4000) // adjust the length as needed
    private String contenu;

    @ManyToOne
    @JoinColumn(name = "dance_school_id")
    @JsonBackReference // Empêche la récursion lors de la sérialisation JSON
    private DanceSchool danceSchool;

    // Constructeurs
    public Course() {}

    public Course(Long id, String name, String instructor, String schedule, String contenu, DanceSchool danceSchool) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.schedule = schedule;
        this.contenu = contenu;
        this.danceSchool = danceSchool;
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

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public DanceSchool getDanceSchool() {
        return danceSchool;
    }

    public void setDanceSchool(DanceSchool danceSchool) {
        this.danceSchool = danceSchool;
    }

    // toString
    @Override
    public String toString() {
        return "Course [id=" + id + ", name=" + name + ", instructor=" + instructor + ", schedule=" + schedule + ", contenu=" + contenu + ", danceSchool=" + danceSchool + "]";
    }
}
