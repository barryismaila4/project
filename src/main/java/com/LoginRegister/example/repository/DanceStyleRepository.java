package com.LoginRegister.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LoginRegister.example.entity.DanceCategory;
import com.LoginRegister.example.entity.DanceStyle;

public interface DanceStyleRepository extends JpaRepository<DanceStyle, Long> {
    // Vous pouvez ajouter des méthodes personnalisées ici si nécessaire
    // Ajoutez cette méthode dans DanceStyleRepository

    List<DanceStyle> findByDanceCategory(DanceCategory danceCategory);

}
