package com.personal.api;

import java.util.List;
import java.util.Optional;

import javax.validation.ReportAsSingleViolation;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.personal.dto.CabBookingDTO;
import com.personal.dto.FareEstimationDTO;
import com.personal.entity.CabBooking;
import com.personal.entity.FareEstimation;
import com.personal.entity.Helpservice;
import com.personal.exception.CabException;
import com.personal.repository.BookingRepository;
import com.personal.repository.FareRepository;
import com.personal.repository.helpservicerepo;
import com.personal.service.BookingService;
import com.personal.utility.HttpResponse;

@CrossOrigin
@Validated
@RestController
@RequestMapping(value = "/bookings")
public class CabBookingAPI {
	
	@Autowired
	private BookingService bookingService;

	@Autowired
	private Environment environment;
	
	@Autowired
	private FareRepository repo;
	
	@Autowired
	private BookingRepository bRepo;
	
	@Autowired
	private com.personal.service.Helpservice helpservice;
	
	@Autowired
	private helpservicerepo helprepo;
	
	
	
	public CabBookingAPI() {
		// TODO Auto-generated constructor stub
	}
	
	

/*This is a REST controller method to book a cab. It accepts booking details as part of HTTP request body.
It invokes the bookCab() method of BookingServiceImpl, which returns a booking id.
It returns an object of ResponseEntity created using success message and HTTP status code as CREATED.
If any exception occurs its catch them and throw ResponseStatusException with HTTP status code as BAD_REQUEST along with message and the exception. */
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/bookCab")
	public ResponseEntity<HttpResponse> bookCab(@Valid @RequestBody CabBookingDTO cabBookingDTO) throws CabException {
		Integer bookingId = bookingService.bookCab(cabBookingDTO);
		HttpResponse httpResponse = new HttpResponse();
		httpResponse.setSuccessMessage(environment.getProperty("API.BOOKING_SUCCESSFUL")+bookingId);
		httpResponse.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<HttpResponse>(httpResponse, HttpStatus.CREATED);
	}
	
	@PostMapping(value = "/helppost")
	public ResponseEntity<Helpservice> helpost(@RequestBody Helpservice entity){
		
		return new ResponseEntity<Helpservice>(helpservice.posthelp(entity), HttpStatus.OK);
		
	}

	@GetMapping(value ="/getallhelps")
	public ResponseEntity<List<Helpservice>> getallhelps() throws CabException {
		return new ResponseEntity<List<Helpservice>>((List<Helpservice>) helprepo.findAll(), HttpStatus.OK);
	}
	
/*This is a REST controller method to get cab booking details based on mobile number of user. 
It accepts mobileNo as path variable.
It invokes the getDetails() methods of BookingService which returns a List<CabBooking>.
It returns an object of ResponseEntity created using List<CabBooking> and HTTP status code as OK.
If any exception occurs it catches them and throw ResponseStatusException with HTTP status code as BAD_REQUEST along with message and the exception. */
	@GetMapping(value = "/{mobileNo}")
	public ResponseEntity<List<CabBookingDTO>> getBookingDetails(@PathVariable Long mobileNo) throws CabException {
		return new ResponseEntity<List<CabBookingDTO>>(bookingService.getBookingDetails(mobileNo), HttpStatus.OK);
	}
	
	
	@PutMapping(value = "remarkput/{remarkid}")
	public ResponseEntity<Helpservice> updateRide(@PathVariable Integer remarkid,@Valid @RequestBody Helpservice remarkdata) throws CabException {
		
		Optional<Helpservice> k=helpservice.findhelpbyid(remarkid);
		Helpservice datavalue = k.get();
		System.out.print(datavalue);
		datavalue.setRemark(remarkdata.getRemark());
		System.out.println(datavalue);
		helprepo.save(datavalue);
		return new ResponseEntity<Helpservice>(HttpStatus.OK);
	}
	
	@GetMapping(value = "hello/{helpid}")
	public ResponseEntity<Optional<Helpservice>> getremarkbyid(@PathVariable Integer helpid) throws CabException {
		return new ResponseEntity<Optional<Helpservice>>(helpservice.findhelpbyid(helpid), HttpStatus.OK);
	}
	
	@GetMapping(value="byidhelp/{bookingid}")
	public ResponseEntity<List<Helpservice>> byidhelp(@PathVariable Integer bookingid) throws CabException {
		return new ResponseEntity<List<Helpservice>>(helpservice.byidhelp(bookingid), HttpStatus.OK);
	}

/*This is a REST controller method to cancel cab booking based on bookingId. 
It accepts bookingId as path variable.
It invokes cancelBooking() method of BookingService.
It returns an object of ResponseEntity created using success message and HTTP status code as OK. 
If any exception occurs it catches them and throw ResponseStatusException with HTTP status code as BAD_REQUEST along with message and the exception.*/
	@DeleteMapping(value = "/{bookingId}")
	public ResponseEntity<HttpResponse> cancelBooking(@PathVariable Integer bookingId) throws CabException {
		Integer cancelId = bookingService.cancelBooking(bookingId);
		HttpResponse httpResponse = new HttpResponse();
		httpResponse.setSuccessMessage(environment.getProperty("API.BOOKING_CANCELLED")+cancelId);
		httpResponse.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<HttpResponse>(httpResponse, HttpStatus.OK);
	}
	
	@GetMapping(value = "/fares")
	public ResponseEntity<List<FareEstimationDTO>> getFareDetails() throws CabException {
		return new ResponseEntity<List<FareEstimationDTO>>(bookingService.getFares(), HttpStatus.OK);
	}
	
	@PutMapping(value = "/{bookingId}")
	public ResponseEntity<HttpResponse> updateRide(@PathVariable Integer bookingId,@Valid @RequestBody CabBookingDTO cabBookingDTO) throws CabException {
		System.out.println(cabBookingDTO);
		Integer updateBookingId = bookingService.updateRide(bookingId, cabBookingDTO);
		HttpResponse httpResponse = new HttpResponse();
		httpResponse.setSuccessMessage(environment.getProperty("API.UPDATE_SUCCESSFUL")+updateBookingId);
		httpResponse.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<HttpResponse>(httpResponse, HttpStatus.OK);
	}
	@DeleteMapping("/fare/{fareId}")
	public ResponseEntity<HttpResponse> deletefare(@PathVariable Integer fareId) {
		
		repo.deleteById(fareId);
		return null;
	
	}
	@PutMapping("faress/{fareId}")
	public ResponseEntity<FareEstimation> UpdateFare(@PathVariable Integer fareId, @RequestBody FareEstimation fareupdate){
		Optional<FareEstimation> optional = repo.findById(fareId);
		System.out.println(optional);
		System.out.println(fareupdate);
		if(optional.isEmpty()) {
//			throw new ("Student does not exist");
			return null;
		}
		
		return new ResponseEntity<FareEstimation>(repo.save(fareupdate),HttpStatus.OK);
		//return null;
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/bookingdetails")
	public ResponseEntity<List<CabBooking>> getBookingDetails() throws CabException {
		System.out.println("Hello");
		return new ResponseEntity<List<CabBooking>>((List<CabBooking>) bookingService.getBookings(), HttpStatus.OK);
	}
	
	@PostMapping("addfare")
	public ResponseEntity<FareEstimation> addfare(@Valid @RequestBody FareEstimation Faredata) {
		
		return new ResponseEntity<FareEstimation>(repo.save(Faredata), HttpStatus.CREATED);
	}
	}
	
