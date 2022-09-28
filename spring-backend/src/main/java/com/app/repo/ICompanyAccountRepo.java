package com.app.repo;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.CompanyAccount;

public interface ICompanyAccountRepo extends JpaRepository<CompanyAccount, Integer> {

	

}
