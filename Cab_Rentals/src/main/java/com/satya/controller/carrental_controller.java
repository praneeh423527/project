package com.satya.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.satya.car_repo.carrental_repo;
import com.satya.car_repo.userentals;
import com.satya.entity.Carrentals_entity;
import com.satya.entity.userrental;


@RestController
@CrossOrigin
@RequestMapping(value = "/rentals")
public class carrental_controller {

	
	@Autowired
	private carrental_repo repo;
	
	@Autowired
	private userentals rentalrepo;
	
	@GetMapping(value ="/getallcars")
	public ResponseEntity<List<Carrentals_entity>> getallhelps() {
		return new ResponseEntity<List<Carrentals_entity>>((List<Carrentals_entity>) repo.findAll(), HttpStatus.OK);
	}
	
	@PostMapping(value = "/postcars")
	public ResponseEntity<Carrentals_entity> helpost(@RequestBody Carrentals_entity data){
		
		return new ResponseEntity<Carrentals_entity>(repo.save(data), HttpStatus.OK);
		
	}
	
	@DeleteMapping("deletecar/{carId}")
	public void deletefare(@PathVariable Integer carId) {
		
		repo.deleteById(carId);
		
	
	}
	
	@PutMapping("updatecar")
	public ResponseEntity<Carrentals_entity> UpdateFare(@RequestBody Carrentals_entity rentalupdate){
//		Optional<Carrentals_entity> optional = repo.findById(rentalid);
		return new ResponseEntity<Carrentals_entity>(repo.save(rentalupdate),HttpStatus.OK);
		
	}
	
	@PostMapping(value = "/bookcar")
	public ResponseEntity<userrental> bookcar(@RequestBody userrental data){
		
		return new ResponseEntity<userrental>(rentalrepo.save(data), HttpStatus.OK);
		
	}
	
	@GetMapping(value ="/getbookedcars")
	public ResponseEntity<List<userrental>> getbookedcars() {
		return new ResponseEntity<List<userrental>>((List<userrental>) rentalrepo.findAll(), HttpStatus.OK);
	}
	

	@GetMapping(value ="/getbookedrentalcarsyid/{Mobilenumber}")
	public ResponseEntity<List<userrental>> getbookedrentalcars(@PathVariable Long Mobilenumber) {
		List<userrental> data=(List<userrental>) rentalrepo.findAll();
		List<userrental> k=new ArrayList<userrental>();
		for(userrental i:data) {
			System.out.println(i.getMobilenumber());
			if(i.getMobilenumber().equals(Mobilenumber)) {
				k.add(i);
				System.out.print(i);
			}
		}
		return new ResponseEntity<List<userrental>>((List<userrental>) k, HttpStatus.OK);
	}
	
	@DeleteMapping("deleterentaldetails/{id}")
	public void deleterentaldetails(@PathVariable Integer id) {
		System.out.println("good");
		rentalrepo.deleteById(id);
		
	
	}
	
}

