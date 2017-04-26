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

@Entity
@Table(name = "owner_table")
@PrimaryKeyJoinColumn(name = "userID")
public class Owner extends User {
	
	@OneToMany
	@JoinColumn(name="ownerId")
	private Set<Restaurant> orders = new HashSet<Restaurant>();
	
	

}