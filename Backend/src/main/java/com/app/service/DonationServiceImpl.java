package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.dto.DonationRequestDTO;
import com.app.dto.DonationResponseDTO;
import com.app.entities.Customer;
import com.app.entities.Donation;
import com.app.entities.NGO;
import com.app.entities.Tiffin;
import com.app.repository.CustomerRepository;
import com.app.repository.DonationRepository;
import com.app.repository.NGORepository;
import com.app.repository.TiffinRepository;

@Service
public class DonationServiceImpl implements DonationService {
	
	private final DonationRepository donationRepository;
    private final CustomerRepository customerRepository;
    private final TiffinRepository tiffinRepository;
    private final NGORepository ngoRepository;

    public DonationServiceImpl(DonationRepository donationRepository, CustomerRepository customerRepository,
                               TiffinRepository tiffinRepository, NGORepository ngoRepository) {
        this.donationRepository = donationRepository;
        this.customerRepository = customerRepository;
        this.tiffinRepository = tiffinRepository;
        this.ngoRepository = ngoRepository;
    }

    @Override
    @Transactional
    public DonationResponseDTO donateMeal(DonationRequestDTO requestDTO) {
        Customer donor = customerRepository.findById(requestDTO.getDonorId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Tiffin tiffin = tiffinRepository.findById(requestDTO.getTiffinId())
                .orElseThrow(() -> new RuntimeException("Meal not found"));

        NGO ngo = ngoRepository.findById(requestDTO.getNgoId())
                .orElseThrow(() -> new RuntimeException("NGO not found"));

        Donation donation = Donation.builder()
                .donor(donor)
                .tiffin(tiffin)
                .ngo(ngo)
                .amount(requestDTO.getAmount())
                .paymentStatus("Pending")
                .paymentTime(LocalDateTime.now())
                .createdAt(LocalDateTime.now())
                .build();

        donation = donationRepository.save(donation);

        return new DonationResponseDTO(donation.getId(), donor.getFirstName(), tiffin.getName(),
                ngo.getName(), donation.getAmount(), donation.getPaymentStatus(), donation.getCreatedAt());
    }

    @Override
    public List<DonationResponseDTO> getDonationsByCustomer(Long customerId) {
        return donationRepository.findByDonorId(customerId)
                .stream()
                .map(d -> new DonationResponseDTO(d.getId(), d.getDonor().getFirstName(), d.getTiffin().getName(),
                        d.getNgo().getName(), d.getAmount(), d.getPaymentStatus(), d.getCreatedAt()))
                .collect(Collectors.toList());
    }
	
//	@Override
//	public DonationResponseDTO donateMeal(DonationRequestDTO requestDTO) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<DonationResponseDTO> getDonationsByCustomer(Long customerId) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
