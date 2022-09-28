package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class UpdateProfileDto {
	
	private Integer uid;
	private String name;
	private long mobile;
	private String email;
	private long adhar;
	private String vehicleNo;
	private String licenseNo;
	
	public UpdateProfileDto(Integer uid, String name, long mobile, String email, long adhar, String vehicleNo,
			String licenseNo) {
		super();
		this.uid = uid;
		this.name = name;
		this.mobile = mobile;
		this.email = email;
		this.adhar = adhar;
		this.vehicleNo = vehicleNo;
		this.licenseNo = licenseNo;
	}

	public UpdateProfileDto(Integer uid, String name, long mobile, String email, long adhar) {
		super();
		this.uid = uid;
		this.name = name;
		this.mobile = mobile;
		this.email = email;
		this.adhar = adhar;
	}
	
	
	
	
	
}
