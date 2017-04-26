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
@Table(name="food_table")
public class Food{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", unique=true, nullable = false)
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="price")
	private Float price;
	
	@Column(name="type")
	private String type;
	
	@Column(name="description")
	private String description;
	
//	@ManyToMany
//    @JoinTable (
//       name="order_food_table",
//       joinColumns = {@JoinColumn(name="foodID", nullable = false, updatable = false)},
//       inverseJoinColumns = {@JoinColumn(name="orderID")} //joinColumns指定当前对象的外键；inverseJoinColumns指定关联对象的外键
//    )
//	private Set<Order> orders = new HashSet<Order>();
	
	public String getDescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }
    
	public long getId() {
        return id;
    }

    public void setRestaurantId(long id) {
        this.id = id;
    }
    
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