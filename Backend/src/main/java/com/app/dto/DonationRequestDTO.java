package com.app.dto;


import lombok.Data;
import java.time.LocalDateTime;

@Data
public class DonationRequestDTO {
    private Long donorId;
    private Long tiffinId;
    private Long ngoId;
    private double amount;
}

