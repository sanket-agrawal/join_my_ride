package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Setter;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class CompanyAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer AccountId;
	private Integer rideId;
	private Integer custId;
	private Integer paymentId;
	private String pType;
	private LocalDate date;
	private LocalTime time;
	private double income;
	
	public CompanyAccount(Integer rideId, Integer custId,Integer paymentId, String pType, LocalDate date,LocalTime time, double income) {
		super();
		this.rideId = rideId;
		this.custId = custId;
		this.paymentId = paymentId;
		this.pType = pType;
		this.date = date;
		this.time = time;
		this.income = income;
	}
	
	
	
}
