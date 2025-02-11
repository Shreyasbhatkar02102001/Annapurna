package com.app.entities;


import javax.persistence.Entity;
import javax.persistence.Id;

//import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NGO extends BaseEntity{
    

    private String name;
    private String contactEmail;
    private String contactPhone;
    private String address;
    
    
}
