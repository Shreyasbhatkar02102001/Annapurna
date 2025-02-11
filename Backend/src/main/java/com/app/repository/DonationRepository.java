package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Donation;

import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByDonorId(Long donorId);
    List<Donation> findByNgoId(Long ngoId);
}

