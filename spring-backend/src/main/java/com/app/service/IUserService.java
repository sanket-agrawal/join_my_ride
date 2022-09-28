package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LoginDto;
import com.app.dto.UserDto;
import com.app.pojos.User;

public interface IUserService {

	public Object register(UserDto user);
	
	public String deleteDriver(Integer did);
	
	public String deleteCustomer(Integer cid);
	
	public User findByEmailAndPassword(LoginDto logindto);

	public void storeImage(Integer uid, MultipartFile imageFile) throws IOException;
	
	public byte[] downloadImage(Integer uid) throws IOException;
}
