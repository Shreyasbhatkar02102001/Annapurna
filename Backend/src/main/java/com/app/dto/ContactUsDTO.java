package com.app.dto;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactUsDTO {
    private String name;
    private String email;
    private String subject;
    private String message;
    private LocalDateTime createdAt;
}

