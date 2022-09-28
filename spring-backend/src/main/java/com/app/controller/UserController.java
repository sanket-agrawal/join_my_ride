package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.DriverDto;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.service.ICustomerService;
import com.app.service.IDriverService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	@Autowired
	private IUserService userService;
	
	@Autowired 
	private IDriverService driverService;
	
	@Autowired
	private ICustomerService custService;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDto userDto){
		Object object = userService.register(userDto);
		if(!object.equals("User Already Exists")) {
			User user = (User)object;
			System.out.println(user);
			System.out.println(userDto);
			if(user.getRole().toString().equals("DRIVER")) {
				System.out.println("inside driver regitser controller");
				driverService.register(userDto,user);
				return new ResponseEntity<>("Driver Registered Successfully",HttpStatus.OK);
			}
			else if(user.getRole().toString().equals("CUSTOMER")) {
				custService.register(user);
				return new ResponseEntity<>("Customer Registered Successfully",HttpStatus.OK);
			}
		}

		return new ResponseEntity<>("User Already Exists!!! ",HttpStatus.OK);
	}
	
	@PostMapping("/{uid}/profile-image")
	public ResponseEntity<?> uploadImage(@PathVariable Integer uid,@RequestParam MultipartFile imageFile) throws IOException{
		System.out.println("Uploading image");
		System.out.println("name "+imageFile.getName()+"Content Type  = "+imageFile.getContentType()+" Size = "+imageFile.getSize());
		userService.storeImage(uid,imageFile);
		return new ResponseEntity<>("Profile Photo Uploaded Successfully !!!",HttpStatus.OK);
	}
	
	@GetMapping(value="/{uid}/image",produces= {MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_PNG_VALUE})
	public ResponseEntity<?> getImage(@PathVariable Integer uid) throws IOException{
		System.out.println("In Get Image of "+uid);
		byte[] content = userService.downloadImage(uid);
		return new ResponseEntity<>(content,HttpStatus.OK);
	}
	
	
	
}
