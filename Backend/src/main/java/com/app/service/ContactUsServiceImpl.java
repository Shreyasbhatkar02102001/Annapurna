package com.app.service;

import com.app.dto.ContactUsDTO;
import com.app.entities.ContactUs;
import com.app.repository.ContactUsRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactUsServiceImpl implements ContactUsService {

    private final ContactUsRepository repository;

    public ContactUsServiceImpl(ContactUsRepository repository) {
        this.repository = repository;
    }

    @Override
    public ContactUsDTO saveInquiry(ContactUsDTO contactUsDTO) {
        ContactUs inquiry = ContactUs.builder()
                .name(contactUsDTO.getName())
                .email(contactUsDTO.getEmail())
                .subject(contactUsDTO.getSubject())
                .message(contactUsDTO.getMessage())
                .build();
        
        ContactUs savedInquiry = repository.save(inquiry);
        
        return new ContactUsDTO(
                savedInquiry.getName(),
                savedInquiry.getEmail(),
                savedInquiry.getSubject(),
                savedInquiry.getMessage(),
                savedInquiry.getCreatedAt()
        );
    }

    @Override
    public List<ContactUsDTO> getAllInquiries() {
        return repository.findAll().stream()
                .map(contact -> new ContactUsDTO(
                        contact.getName(),
                        contact.getEmail(),
                        contact.getSubject(),
                        contact.getMessage(),
                        contact.getCreatedAt()))
                .collect(Collectors.toList());
    }
}
