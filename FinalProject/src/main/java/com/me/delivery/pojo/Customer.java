package com.me.delivery.pojo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.me.delivery.pojo.Order;

@Entity
@Table(name = "customer_table")
@PrimaryKeyJoinColumn(name = "userID")
public class Customer extends User {

	@OneToMany
	@JoinColumn(name="customerId")
	private Set<Order> orders = new HashSet<Order>();
	
	public Customer(){
	}
	
	public Set<Order> getOrders() {
		return orders;
	}

	public void setEmail(Set<Order> orders) {
		this.orders = orders;
	}
	
}