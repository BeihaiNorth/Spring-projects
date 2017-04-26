package com.me.delivery.pojo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Column;
import org.hibernate.annotations.*;


@Entity
@Table(name="order_table")
public class Order{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", unique=true, nullable = false)
	private Long id;
    
	@Column(name="firstname")
    private String firstname;
    
	@Column(name="lastname")
    private String lastname;
    
	@Column(name="address")
    private String address;
    
	@Column(name="state")
    private String state;
    
	@Column(name="city")
    private String city;
    
	@Column(name="zipcode")
    private String zipcode;
    
	@Column(name="phone")
    private String phone;
    
	@Column(name="cardNum")
    private String cardNum;
    
	@Column(name="expMonth")
    private String expMonth;
    
	@Column(name="expYear")
    private String expYear;
    
	@Column(name="ccv")
    private String ccv;
    
	@Column(name="billingzip")
    private String billingzip;
    
	@ManyToMany(mappedBy="orders")
    private List<Food> foods = new ArrayList<Food>();
    
	@Column(name="tip")
    private Float tip;
    
	@Column(name="foodPrice")
    private Float foodPrice;
    
	@Column(name="totalPrice")
    private Float totalPrice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCardNum() {
        return cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public String getExpMonth() {
        return expMonth;
    }

    public void setExpMonth(String expMonth) {
        this.expMonth = expMonth;
    }

    public String getExpYear() {
        return expYear;
    }

    public void setExpYear(String expYear) {
        this.expYear = expYear;
    }

    public String getCcv() {
        return ccv;
    }

    public void setCcv(String ccv) {
        this.ccv = ccv;
    }

    public String getBillingzip() {
        return billingzip;
    }

    public void setBillingzip(String billingzip) {
        this.billingzip = billingzip;
    }

    public List<Food> getFoods() {
        return foods;
    }

    public void setFoods(List<Food> foods) {
        this.foods = foods;
    }

    public Float getTip() {
        return tip;
    }

    public void setTip(Float tip) {
        this.tip = tip;
    }

    public Float getFoodPrice() {
        return foodPrice;
    }

    public void setFoodPrice(Float foodPrice) {
        this.foodPrice = foodPrice;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }
}