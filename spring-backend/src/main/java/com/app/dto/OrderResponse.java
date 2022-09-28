package com.app.dto;

import java.math.BigInteger;

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
public class OrderResponse {

	
	private String key;
	private String razorPayOrderId;
	private double amount;
	private String id;
	private Integer cid;
	private Integer rid;
	
	
	
	
}
