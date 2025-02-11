package com.app.entities;



//import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Donation extends BaseEntity{
    

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private Customer donor;

    @ManyToOne
    @JoinColumn(name = "tiffin_id")
    private Tiffin tiffin;

    @ManyToOne
    @JoinColumn(name = "ngo_id")
    private NGO ngo;

    private double amount;
    private String paymentStatus;
    private LocalDateTime paymentTime;

    private LocalDateTime createdAt;
}
