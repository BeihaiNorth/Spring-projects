package com.me.delivery.pojo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import org.hibernate.annotations.*;

import com.me.delivery.pojo.Order;

@Entity
@Table(name="fooditem_table")
public class Fooditem{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", unique=true, nullable = false)
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="count")
	private String count;
	
	public void setName(String name){
		this.name = name;
	}
	
	public String getName(){
		return this.name;
	}
	
	public void setCount(String count){
		this.count = count;
	}
	
	public String getCount(){
		return this.count;
	}
}