package com.me.delivery.pojo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import org.hibernate.annotations.*;

@Entity
@Table(name="food_table")
public class Food{
	
	@Id
	@GeneratedValue(generator = "foodGenerator")
	@Column(name="id")
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="price")
	private Float price;
	
	@Column(name="type")
	private String type;
	
	public void setName(String name){
		this.name = name;
	}
	
	public String getName(){
		return this.name;
	}
	
	public void setPrice(Float price){
		this.price = price;
	}
	
	public Float getPrice(){
		return this.price;
	}
}