package com.LoginRegister.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LoginRegister.example.entity.DanceCategory;

public interface DanceCategoryRepository extends JpaRepository<DanceCategory, Long> {
    // Vous pouvez ajouter des méthodes personnalisées ici si nécessaire
}
