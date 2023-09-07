package com.personal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personal.repository.helpservicerepo;

@Service
public class Helpservice {

	@Autowired
	private helpservicerepo repo;

	public com.personal.entity.Helpservice posthelp(com.personal.entity.Helpservice entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}



	public Optional<com.personal.entity.Helpservice> findhelpbyid(Integer helpid) {
		
		return repo.findById(helpid);
	}



	public List<com.personal.entity.Helpservice> byidhelp(Integer bookingid) {
		// TODO Auto-generated method stub
		System.out.print(bookingid);
		return repo.findBybookingid(bookingid);
	}
	
	
}
