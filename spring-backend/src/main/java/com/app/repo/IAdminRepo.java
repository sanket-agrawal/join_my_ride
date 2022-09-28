package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Admin;

public interface IAdminRepo extends JpaRepository<Admin, Integer> {

	@Query(value="select * from admin_tbl a where a.email=:email and a.pwd=:pwd",nativeQuery = true)
	public Admin authencticateAdmin(String email,String pwd);
	
}
