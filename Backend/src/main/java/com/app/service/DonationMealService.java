package com.app.service;


import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.DonationMealDTO;
import com.app.entities.DonationMeal;

public interface DonationMealService {
	DonationMeal createDonationMeal(String name, String description, double price, Long ngoId, Long vendorId, MultipartFile imageFile);
    List<DonationMeal> getDonationMealsByVendor(Long vendorId);
}
