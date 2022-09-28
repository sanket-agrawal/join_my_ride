package com.app.service;

import com.app.dto.LoginDto;
import com.app.pojos.Admin;

public interface IAdminService {

	public void registerAdmin(Admin admin);
	
	public Admin authenticateAdmin(LoginDto logindto);
	
	public String authDriver(Integer id);

	
}

