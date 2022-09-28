package com.app.repo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Rides;

public interface IRidesRepo extends JpaRepository<Rides, Integer> {
	
	@Query(value="select * from rides_tbl r where r.source=:source and r.dest=:dest and r.date=:time",nativeQuery = true)
	public List<Rides> findRideByDetials(String source,String dest,LocalDate time);
	
	

}
