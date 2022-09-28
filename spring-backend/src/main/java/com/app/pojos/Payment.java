package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="payment_tbl")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pid;
	@ManyToOne
	@JoinColumn(name="cid")
	private Customer customer;
	//@JsonIgnore
	@OneToOne
	@JoinColumn(name="rid")
	private Rides rides;
	private LocalDate date;
	private LocalTime time;
	@Column(length=40)
	private String mode;
	
	
	public Payment(Customer customer,Rides rides,LocalDate date,LocalTime time,String mode) {
		this.customer =  customer;
		this.rides = rides;
		this.date = date;
		this.time = time;
		this.mode = mode;
	}
	
	
}
