package com.app.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.app.dto.BookedRides;
import com.app.dto.CustomerResponse;
import com.app.dto.LoginDto;
import com.app.dto.UpdateProfileDto;
import com.app.pojos.Customer;
import com.app.pojos.Payment;
import com.app.pojos.Rides;
import com.app.pojos.User;

public interface ICustomerService {

	public List<CustomerResponse> getAllCustomers();
	
	public void register(User user);
	
	public CustomerResponse extractCustomer(User user);
	
	public List<Payment> myPreviousRides(Integer cid);

	public boolean updateProfile(Integer cid, UpdateProfileDto updateDto); 
	
	public void rateRide(Integer pid,Double rating);

	Customer findCustomer(Integer cid);

	List<BookedRides> getRides(Integer cid);
	
}
