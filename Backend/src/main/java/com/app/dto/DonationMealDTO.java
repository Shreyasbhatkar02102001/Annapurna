package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonationMealDTO {
    private String name;
    private String description;
    private double price;
    private Long vendorId;
    private Long ngoId;
}
