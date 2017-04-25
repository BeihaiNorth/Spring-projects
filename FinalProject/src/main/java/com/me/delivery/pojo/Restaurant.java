package com.me.delivery.pojo;


import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="restaurant_table")
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "restaurantID", unique=true, nullable = false)
	private long restaurantId;
	
	@Column(name="name")
	private String name;
	
	@Column(name="street")
	private String street;
	
	@Column(name="zipcode")
	private String zipcode;
	
	@Column(name="lattitude")
	private String lattitude;
	
	@Column(name="longtitude")
	private String longtitude;
	
	@Column(name="tel")
	private String tel;
	
	@Column(name="rate")
	private String rate;
	
	@Column(name="hours")
	private String hours;
	
	@Column(name="type")
	private String type;
	
	@OneToMany
	@JoinColumn(name="Restaurantid") //Uni-directive. This column is added to 'food' table
	private Set<Food> foods;
	
	public Restaurant(String name, String street, String zipcode, String lattitude, String longtitude, String tel, String hours, String type){
		this.name = name;
		this.street = street;
		this.zipcode = zipcode;
		this.lattitude = lattitude;
		this.longtitude = longtitude;
		this.tel = tel;
		this.hours = hours;
		this.type = type;
	}
	
	public Restaurant(){
		
	}
	
	
	public long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getLattitude() {
        return lattitude;
    }

    public void setLattitude(String lattitude) {
        this.lattitude = lattitude;
    }

    public String getLongtitude() {
        return longtitude;
    }

    public void setLongtitude(String longtitude) {
        this.longtitude = longtitude;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }
    
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
	
	public void setFoods(Set<Food> foods){
		this.foods = foods;
	}
	
	public Set<Food> getFoods(){
		return this.foods;
	}
}