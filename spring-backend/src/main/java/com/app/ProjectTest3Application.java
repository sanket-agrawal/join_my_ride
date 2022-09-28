package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.app.controller.AdminController;
import com.app.emailsender.EmailSenderService;

@SpringBootApplication
public class ProjectTest3Application {
	
	
	@Autowired
	private EmailSenderService emailSender;

	public static void main(String[] args) {
		SpringApplication.run(ProjectTest3Application.class, args);
	}

}
