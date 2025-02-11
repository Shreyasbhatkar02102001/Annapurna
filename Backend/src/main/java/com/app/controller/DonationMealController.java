package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.DonationMealDTO;
import com.app.entities.DonationMeal;
import com.app.service.DonationMealService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/add-donation-meal")
public class DonationMealController {

    @Autowired
    private DonationMealService donationMealService;

    @PostMapping(consumes = "multipart/form-data")
    public DonationMeal createDonationMeal(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("ngoId") Long ngoId,
            @RequestParam("vendorId") Long vendorId,
            @RequestParam("imageFile") MultipartFile imageFile
    ) {
        return donationMealService.createDonationMeal(name, description, price, ngoId, vendorId, imageFile);
    }

    @GetMapping("/vendor/{vendorId}")
    public List<DonationMeal> getDonationMealsByVendor(@PathVariable Long vendorId) {
        return donationMealService.getDonationMealsByVendor(vendorId);
    }
}