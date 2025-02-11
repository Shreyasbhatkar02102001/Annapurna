package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.DonationMeal;

import java.util.List;

public interface DonationMealRepository extends JpaRepository<DonationMeal, Long> {
    List<DonationMeal> findByVendorId(Long vendorId);
}