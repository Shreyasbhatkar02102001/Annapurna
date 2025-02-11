package com.app.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.DonationMealDTO;
import com.app.entities.DonationMeal;
import com.app.entities.NGO;
import com.app.entities.Vendor;
import com.app.repository.DonationMealRepository;
import com.app.repository.NGORepository;
import com.app.repository.VendorRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class DonationMealServiceImpl implements DonationMealService {

    @Autowired
    private DonationMealRepository donationMealRepository;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private NGORepository ngoRepository;
    
    private static final String UPLOAD_DIR = "uploads/";


    @Override
    public DonationMeal createDonationMeal(String name, String description, double price, Long ngoId, Long vendorId, MultipartFile imageFile) {
        try {
            // Save the image file and get the file path
            String imagePath = saveImage(imageFile);

            // Fetch vendor and NGO
            Vendor vendor = vendorRepository.findById(vendorId)
                    .orElseThrow(() -> new RuntimeException("Vendor not found"));
            NGO ngo = ngoRepository.findById(ngoId)
                    .orElseThrow(() -> new RuntimeException("NGO not found"));

            // Create and save the donation meal
            DonationMeal donationMeal = new DonationMeal();
            donationMeal.setName(name);
            donationMeal.setDescription(description);
            donationMeal.setPrice(price);
            donationMeal.setImagePath(imagePath);
            donationMeal.setVendor(vendor);
            donationMeal.setNgo(ngo);

            return donationMealRepository.save(donationMeal);
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image file", e);
        }
    }

    private String saveImage(MultipartFile imageFile) throws IOException {
        // Create the upload directory if it doesn't exist
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate a unique file name
        String fileName = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        // Save the file
        Files.copy(imageFile.getInputStream(), filePath);

        // Return the file path
        return UPLOAD_DIR + fileName;
    }

    @Override
    public List<DonationMeal> getDonationMealsByVendor(Long vendorId) {
        return donationMealRepository.findByVendorId(vendorId);
    }

    
}