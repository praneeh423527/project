package com.satya.entity;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class userrental {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookingid;
	private Long mobilenumber;
	private Integer	rentals_id;
	private String carname;
	private Integer	price;
	private String location;
	private String carnumber;
	private String availability;
	private String car_image;
	private LocalDate date;
	private String emailid;
	
	public Integer getBookingid() {
		return bookingid;
	}
	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}
	public Long getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(Long mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public Integer getRentals_id() {
		return rentals_id;
	}
	public void setRentals_id(Integer rentals_id) {
		this.rentals_id = rentals_id;
	}
	public String getCarname() {
		return carname;
	}
	public void setCarname(String carname) {
		this.carname = carname;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCarnumber() {
		return carnumber;
	}
	public void setCarnumber(String carnumber) {
		this.carnumber = carnumber;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public String getCar_image() {
		return car_image;
	}
	public void setCar_image(String car_image) {
		this.car_image = car_image;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public userrental(Long mobilenumber, Integer rentals_id, String carname, Integer price, String location,
			String carnumber, String availability, String car_image, LocalDate date, String emailid) {
		super();
		this.mobilenumber = mobilenumber;
		this.rentals_id = rentals_id;
		this.carname = carname;
		this.price = price;
		this.location = location;
		this.carnumber = carnumber;
		this.availability = availability;
		this.car_image = car_image;
		this.date = date;
		this.emailid = emailid;
	}
	public userrental() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "userrental [mobilenumber=" + mobilenumber + ", rentals_id=" + rentals_id + ", carname=" + carname
				+ ", price=" + price + ", location=" + location + ", carnumber=" + carnumber + ", availability="
				+ availability + ", car_image=" + car_image + ", date=" + date + ", emailid=" + emailid + "]";
	}
	
	
	
	

}
