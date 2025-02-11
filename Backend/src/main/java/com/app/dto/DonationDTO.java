package com.app.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonationDTO {
    private Long mealId;
    private Long donorId;
    private double amount;
}