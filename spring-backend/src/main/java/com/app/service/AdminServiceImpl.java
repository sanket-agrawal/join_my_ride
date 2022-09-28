package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.LoginDto;
import com.app.emailsender.EmailSenderService;
import com.app.pojos.Admin;
import com.app.pojos.Driver;
import com.app.repo.IAdminRepo;
import com.app.repo.IDriverRepo;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	
	@Autowired
	private IAdminRepo adminRepo;
	
	@Autowired
	private IDriverRepo driverRepo;

	@Override
	public void registerAdmin(Admin admin) {
		adminRepo.save(admin);
	}
	
	@Override
	public Admin authenticateAdmin(LoginDto logindto) {
		String email = logindto.getEmail();
		String pwd = logindto.getPwd();
		Admin admin = adminRepo.authencticateAdmin(email, pwd);
		return admin;
		
	}
	
	@Override
	public String authDriver(Integer id) {
		Driver d = driverRepo.findById(id).orElseThrow(()->new RuntimeException("Driver not found"));
		if(d.isStatus())
			return "Driver already authorized to add rides";
		else
			d.setStatus(true);
			return "Driver can Add Rides Now";
		
	}
	
	
}
