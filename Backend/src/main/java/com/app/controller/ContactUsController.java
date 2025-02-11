package com.app.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.dto.ContactUsDTO;
import com.app.service.ContactUsService;

@CrossOrigin
@RestController
@RequestMapping("/contact-us")
public class ContactUsController {

    private final ContactUsService service;

    public ContactUsController(ContactUsService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ContactUsDTO> saveContact(@RequestBody ContactUsDTO contactUsDTO) {
        return ResponseEntity.ok(service.saveInquiry(contactUsDTO));
    }

    @GetMapping("/getAllContactUsInquiries")
    public ResponseEntity<List<ContactUsDTO>> getAllContacts() {
        return ResponseEntity.ok(service.getAllInquiries());
    }
}
