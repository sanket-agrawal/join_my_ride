package com.app.service;

import java.util.List;

import com.app.pojos.Payment;

public interface IPaymentService {

	public boolean bookRide(Integer cid,Integer rid,String mode);
	
	public List<Payment> getAllPayments();
}
