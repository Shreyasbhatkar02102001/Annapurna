package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class DonationResponseDTO {
    private Long donationId;
    private String donorName;
    private String mealName;
    private String ngoName;
    private double amount;
    private String paymentStatus;
    private LocalDateTime createdAt;
}
