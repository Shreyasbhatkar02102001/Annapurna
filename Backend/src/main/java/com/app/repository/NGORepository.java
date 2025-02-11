package com.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.NGO;

public interface NGORepository extends JpaRepository<NGO, Long> {
}
