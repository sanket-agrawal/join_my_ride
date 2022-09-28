package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class BookedRides {

	private Integer pid;
	private String source;
	private String dest;
	private String type;
	private double charges;
	private LocalDate date;
	private String mode;
	private LocalDate pdate;
}
