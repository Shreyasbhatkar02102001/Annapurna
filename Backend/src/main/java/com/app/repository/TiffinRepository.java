package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Tiffin;

public interface TiffinRepository extends JpaRepository<Tiffin, Long> {
//	List<Tiffin> findByIsDonatableTrue();
}
