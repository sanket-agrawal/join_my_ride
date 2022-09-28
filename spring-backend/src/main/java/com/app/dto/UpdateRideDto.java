package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateRideDto {

	private String source;
	private String destination;
	private LocalDate date;
	private LocalTime time;
	private double charges;
	
	
	
}
