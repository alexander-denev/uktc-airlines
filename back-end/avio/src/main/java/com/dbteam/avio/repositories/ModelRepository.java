package com.dbteam.avio.repositories;

import com.dbteam.avio.entities.Model;
import jakarta.annotation.Nonnull;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
    Model findByName(String name);


    boolean existsByName(@Nonnull String name);
}
