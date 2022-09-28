package com.app.service;

import java.util.List;

import com.app.dto.FindRideDto;
import com.app.dto.RideDto;
import com.app.pojos.Driver;
import com.app.pojos.Rides;

public interface IRideService {

	public List<Rides> getAllRides();
	
	public List<RideDto> findNormalRides(FindRideDto findRide);
	
	public List<RideDto> findSubsRides(FindRideDto findRide);
	
	public Driver confirmDriverDetails(Integer rid);

	public Rides returnRide(Integer rid);

	Rides findRides(Integer rid);
	
		
}
