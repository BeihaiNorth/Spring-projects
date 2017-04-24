package com.me.delivery.pojo;

import javax.persistence.*;
import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="address_table")
public class Address{
	
	@Id
	@GeneratedValue(generator="adressIdGenerator")
	@GenericGenerator(name="adressIdGenerator", strategy="foreign, ", parameters = @Parameter(name = "property", value = "user"))
	@Column(name = "addressID", unique = true, nullable = false)
	private long id;
	
	
	@OneToOne
	@PrimaryKeyJoinColumn
	private Restaurant restaurtant;
	
	@Column(name="street")
	private String street;
	
	
	@Column(name="zipcode")
	private Integer zipcode;
	
	public Address(){
	}
	
	public void setId(long id){
		this.id = id;
	}
	
	public long getId(){
		return this.id;
	}
	
	public void setRestaurant(Restaurant restaurtant){
		this.restaurtant = restaurtant;
	}
	
	public Restaurant getRestaurant(){
		return this.restaurtant;
	}
}