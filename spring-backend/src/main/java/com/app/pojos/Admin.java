package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="admin_tbl")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer aid;
	@Column(length=40)
	private String email;
	@Column(length=40)
	private String name;
	@Column(length=40)
	private String pwd;
	
	public Admin(Integer aid, String email, String name, String pwd) {
		super();
		this.aid = aid;
		this.email = email;
		this.name = name;
		this.pwd = pwd;
	}

	public Admin(String email, String name, String pwd) {
		super();
		this.email = email;
		this.name = name;
		this.pwd = pwd;
	}
	
	
	
	
}
