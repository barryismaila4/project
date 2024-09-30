package com.LoginRegister.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LoginRegister.example.entity.DanceSchool;
import com.LoginRegister.example.entity.DanceStyle;

public interface DanceSchoolRepository extends JpaRepository<DanceSchool, Long> {
     // Méthode personnalisée pour récupérer les écoles par style
    List<DanceSchool> findByDanceStyle(DanceStyle danceStyle);
}
