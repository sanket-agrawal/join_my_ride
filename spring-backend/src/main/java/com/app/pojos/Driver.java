package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="driver_tbl")
public class Driver {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer did;
	@OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	private String vehicleNo;
	private String licenseNo;
	@Column(columnDefinition = "decimal default 0")
	private double ratings;
	@Column(columnDefinition = "decimal default 0")
	private double ratingsSum;
	@Column(columnDefinition = "boolean default false" )	
	private boolean status;
	@Column(columnDefinition = "decimal default 0")
	private double earnings; // added 13 august
	@JsonIgnore //added 
	@OneToMany(mappedBy = "driver",fetch = FetchType.LAZY,orphanRemoval = true, cascade = CascadeType.ALL)  
	private List<Rides> ridesList = new ArrayList<Rides>();
	
	public Driver(User user, String vehicleNo, String licenseNo) {
		super();
		this.user = user;
		this.vehicleNo = vehicleNo;
		this.licenseNo = licenseNo;
	}

	
		public void addRides(Rides ride)
		{
		this.ridesList.add(ride);
		ride.setDriver(this);
		}
	
		public void deleteRides(Rides ride) 
		{
		this.ridesList.remove(ride);
		ride.setDriver(null);
		}
	
	
		public List<Rides> getRidesList()
		{
		return this.ridesList;
		}



		
		

	

	



	

	
}
