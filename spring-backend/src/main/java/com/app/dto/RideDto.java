package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.app.pojos.Type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RideDto {

	private Integer rid;
	private String source;
	private String dest;
	private LocalDate date;
	private LocalTime time;
	private double charges;
	private Type type;
	private double rating;
	private boolean status;
	private Integer did;
	
}
