package com.satya.entity;




import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Carrentals_entity {

	@jakarta.persistence.Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer	rentals_id;
	private String carname;
	private Integer	price;
	private String location;
	private String carnumber;
	private String availability;
	private String car_image;
	public Carrentals_entity(Integer rentals_id, String carname, Integer price, String location, String carnumber,
			String availability, String car_image) {
		super();
		this.rentals_id = rentals_id;
		this.carname = carname;
		this.price = price;
		this.location = location;
		this.carnumber = carnumber;
		this.availability = availability;
		this.car_image = car_image;
	}
	public String getCar_image() {
		return car_image;
	}
	public void setCar_image(String car_image) {
		this.car_image = car_image;
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
	@Override
	public String toString() {
		return "Carrentals_entity [rentals_id=" + rentals_id + ", carname=" + carname + ", price=" + price
				+ ", location=" + location + ", carnumber=" + carnumber + ", availability=" + availability + "]";
	}
	public Carrentals_entity(Integer rentals_id, String carname, Integer price, String location, String carnumber,
			String availability) {
		super();
		this.rentals_id = rentals_id;
		this.carname = carname;
		this.price = price;
		this.location = location;
		this.carnumber = carnumber;
		this.availability = availability;
	}
	public Carrentals_entity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
