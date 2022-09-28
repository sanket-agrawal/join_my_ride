package com.app.service;
import com.app.pojos.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.FindRideDto;
import com.app.dto.RideDto;
import com.app.pojos.CompanyAccount;
import com.app.pojos.Customer;
import com.app.pojos.Rides;
import com.app.repo.ICustomerRepo;
import com.app.repo.IRidesRepo;

@Service
@Transactional
public class RideServiceImpl implements IRideService {

	@Autowired
	private IRidesRepo rideRepo;
	
	@Autowired
	private ICustomerRepo custRepo;
	
	@Override
	public List<Rides> getAllRides() {
		return rideRepo.findAll();
	}

	@Override
	public List<RideDto> findNormalRides(FindRideDto findRide) {
		String source = findRide.getSource();
		String dest = findRide.getDest();
		LocalDate time = findRide.getDate();
		
		List<Rides> list =rideRepo.findRideByDetials(source,dest,time);
		List<RideDto> dtoList = new ArrayList<RideDto>();
		for(int i=0;i<list.size();i++) {
			RideDto dtoObj = new RideDto(list.get(i).getRid(),list.get(i).getSource(),list.get(i).getDest(),list.get(i).getDate(),list.get(i).getTime(),list.get(i).getCharges(),list.get(i).getType(),list.get(i).getDriver().getRatings(),list.get(i).isStatus(),list.get(i).getDriver().getDid());
			dtoList.add(dtoObj);
		}
		
		
		return dtoList.stream()
				.filter(r->r.isStatus()==false)
				.filter(r->r.getType().equals(Type.valueOf("NORMAL")))
				.sorted((c1,c2)->((Double)c2.getRating()).compareTo(c1.getRating()))
				.sorted((c1,c2)->(c1.getTime()).compareTo(c2.getTime()))
				.collect(Collectors.toList());
		
	}
	
	@Override
	public List<RideDto> findSubsRides(FindRideDto findRide) {
		String source = findRide.getSource();
		String dest = findRide.getDest();
		LocalDate time = findRide.getDate();
		
		List<Rides> list =rideRepo.findRideByDetials(source,dest,time);
		List<RideDto> dtoList = new ArrayList<RideDto>();
		for(int i=0;i<list.size();i++) {
			RideDto dtoObj = new RideDto(list.get(i).getRid(),list.get(i).getSource(),list.get(i).getDest(),list.get(i).getDate(),list.get(i).getTime(),list.get(i).getCharges(),list.get(i).getType(),list.get(i).getDriver().getRatings(),list.get(i).isStatus(),list.get(i).getDriver().getDid());
			dtoList.add(dtoObj);
		}
		
		
		return dtoList.stream()
				.filter(r->r.isStatus()==false)
				.filter(r->r.getType().equals(Type.valueOf("SUBSCRIPTION_RIDE")))
				.sorted((c1,c2)->((Double)c2.getRating()).compareTo(c1.getRating())).collect(Collectors.toList());
		
	}
	
	@Override
	public Driver confirmDriverDetails(Integer rid) {
		Rides ride = rideRepo.getById(rid);
		return ride.getDriver();
	}

	@Override
	public Rides returnRide(Integer rid) {
		// TODO Auto-generated method stub
		return rideRepo.findById(rid).orElseThrow(()->new RuntimeException("Ride Not found"));
	}
	
	@Override
	public Rides findRides(Integer rid) {
		return rideRepo.findById(rid).orElseThrow(()->new RuntimeException("Ride Not Found"));
	}
	
	
	
	
	
	

}
