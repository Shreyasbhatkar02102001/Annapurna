package com.app.service;

import java.util.List;

import com.app.dto.DonationRequestDTO;
import com.app.dto.DonationResponseDTO;

public interface DonationService {
    DonationResponseDTO donateMeal(DonationRequestDTO requestDTO);
    List<DonationResponseDTO> getDonationsByCustomer(Long customerId);
}
