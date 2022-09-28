package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmailDto;
import com.app.dto.FinalEmailDto;
import com.app.emailsender.EmailSenderService;
import com.app.pojos.Customer;
import com.app.pojos.Driver;
import com.app.pojos.Rides;
import com.app.service.ICustomerService;
import com.app.service.IRideService;

@RestController
@RequestMapping("/mail")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

	@Autowired
	private EmailSenderService emailSender;
	
	@Autowired 
	private ICustomerService custService;
	
	@Autowired
	private IRideService rideService;
	@PostMapping("/send-mail")
	public ResponseEntity<?> sendEmail(@RequestBody EmailDto emailDto){
		String response = emailSender.sendEmail(emailDto.getEmail(), emailDto.getSubject(),emailDto.getBody());
	
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@PostMapping("/booking-mail")
	public ResponseEntity<String> sendBookingEmail(@RequestBody FinalEmailDto finalEmailDto){
//		Driver driver = driverService.findDriver(finalEmailDto.getDid());
		System.out.println(finalEmailDto.toString());
		Customer customer = custService.findCustomer(finalEmailDto.getCid());
		Rides ride = rideService.findRides(finalEmailDto.getRid());
		Driver driver = ride.getDriver();
		String subject = "JoinMyRide : Your Added Ride is Booked ";
		String subject2 = "JoinMyRide : Your Ride is Booked Successfully";		
		String body = "Dear"+driver.getUser().getName()+"\n You have a booking on your ride \n Source : "+ride.getSource()+"\n Destination : "+ride.getDest()+"\n Date and Time : "+ride.getDate()+"  "+ride.getTime()+"\n CustomerDetails : \n Name : "+customer.getUser().getName()+"\n Mobile Number : "+customer.getUser().getMobile()+"\n OTP for ride is : "+finalEmailDto.getRandom();
		String body2 = "Dear"+customer.getUser().getName()+"\n You have Successfully Booked Ride \n Driver Details : \n Name : "+driver.getUser().getName()+"\n Mobile Number : "+driver.getUser().getMobile()+"\n OTP for Ride is "+finalEmailDto.getRandom(); 
		emailSender.sendEmail(driver.getUser().getEmail(), subject, body);
		emailSender.sendEmail(customer.getUser().getEmail(), subject2, body2);
		
		return new ResponseEntity<>("Mail Sent to Customer and Driver",HttpStatus.OK);
	}
}
