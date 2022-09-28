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
@Table(name="cust_tbl")
public class Customer {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer cid;
	@OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	@JsonIgnore // added 08 sept
	@OneToMany(mappedBy = "customer",fetch = FetchType.LAZY,orphanRemoval = true,cascade = CascadeType.ALL)
	private List<Payment> paymentList = new ArrayList<Payment>();
	
	public Customer(User user) {
		super();
		this.user = user;
	}
	
	
	public void addPayment(Payment pay) {
		this.paymentList.add(pay);
		pay.setCustomer(this);
	}




	
}
