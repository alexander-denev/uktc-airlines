package com.dbteam.avio.repositories;

import com.dbteam.avio.entities.Model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRepository extends JpaRepository<Model, Long> {
}
