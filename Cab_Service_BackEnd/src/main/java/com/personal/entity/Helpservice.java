package com.personal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Helpservice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer	helpid;
	private Integer bookingid;
	private String traveldate;
	private Long mobile;
	private String description;
	private String remark;
	public Integer getHelpid() {
		return helpid;
	}
	public void setHelpid(Integer helpid) {
		this.helpid = helpid;
	}
	public Integer getBookingid() {
		return bookingid;
	}
	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}
	public String getTraveldate() {
		return traveldate;
	}
	public void setTraveldate(String traveldate) {
		this.traveldate = traveldate;
	}
	public Long getMobile() {
		return mobile;
	}
	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	@Override
	public String toString() {
		return "Helpservice [helpid=" + helpid + ", bookingid=" + bookingid + ", traveldate=" + traveldate + ", mobile="
				+ mobile + ", description=" + description + ", remark=" + remark + "]";
	}
	public Helpservice(Integer helpid, Integer bookingid, String traveldate, Long mobile, String description,
			String remark) {
		super();
		this.helpid = helpid;
		this.bookingid = bookingid;
		this.traveldate = traveldate;
		this.mobile = mobile;
		this.description = description;
		this.remark = remark;
	}
	public Helpservice() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
