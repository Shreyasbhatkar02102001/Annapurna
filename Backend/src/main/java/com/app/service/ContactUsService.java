package com.app.service;

import java.util.List;

import com.app.dto.ContactUsDTO;
import com.app.entities.ContactUs;

public interface ContactUsService {
	ContactUsDTO saveInquiry(ContactUsDTO contactUsDTO);
    List<ContactUsDTO> getAllInquiries();
}


