package com.app.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.DonationRequestDTO;
import com.app.dto.DonationResponseDTO;
import com.app.service.DonationService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/donations")
public class DonationController {
    private final DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    @PostMapping("/donate")
    public ResponseEntity<DonationResponseDTO> donateMeal(@RequestBody DonationRequestDTO requestDTO) {
        return ResponseEntity.ok(donationService.donateMeal(requestDTO));
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<DonationResponseDTO>> getCustomerDonations(@PathVariable Long customerId) {
        return ResponseEntity.ok(donationService.getDonationsByCustomer(customerId));
    }
}
