package com.LoginRegister.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LoginRegister.example.entity.Course;
import com.LoginRegister.example.entity.DanceSchool;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // Vous pouvez ajouter des méthodes personnalisées ici si nécessaire
     List<Course> findByDanceSchool(DanceSchool danceSchool);
}
