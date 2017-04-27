package com.me.delivery.dao;

import org.hibernate.HibernateException;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
//import org.hibernate.Query;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;
import org.hibernate.criterion.Restrictions;

import com.me.delivery.pojo.Food;
import com.me.delivery.pojo.Fooditem;
import com.me.delivery.pojo.Order;
import com.me.delivery.pojo.Restaurant;
import com.me.delivery.exception.OrderException;
import com.me.delivery.exception.RestaurantException;

@Repository
public class OrderDAO extends DAO {

	public OrderDAO() {
	}
	
//	public void addOneFoodToOrder(Fooditem fooditem){
//		try{
//			begin();
//			
//		}
//	}
	
	
	public List<Food> collectOrderFood(String quantity, String foodname, String restaurantid) throws OrderException{
		try{
			begin();
			Criteria crit = getSession().createCriteria(Food.class);
			List<Food> foods = new ArrayList<Food>();
			Food food = new Food();
			food.setName(foodname);
			Food f = (Food)crit.add(Restrictions.eq("name", foodname)).
					add(Restrictions.eq("Restaurantis", restaurantid)).uniqueResult();
			for(int i=0; i<Integer.parseInt(quantity); i++){
				foods.add(f);
			}
			commit();
			return foods;
		}catch(HibernateException e){
			rollback();
			throw new OrderException("Could not find this food: " + foodname, e);
		}
	}
	
	public Order setFullOrder(String address,String billingzip,String cardNum,String ccv,String city,
			String expMonth,String expYear,String firstname,String lastname,String phone,String state,
			String totalprice,String zipcode, List<Fooditem> fooditemlist) throws OrderException{
		Order o = new Order();
		try{
			o.setAddress(address);
			o.setBillingzip(billingzip);
			o.setCardNum(cardNum);
			o.setCcv(ccv);
			o.setCity(city);
			o.setExpMonth(expMonth);
			o.setExpYear(expYear);
			o.setFirstname(firstname);
			o.setLastname(lastname);
			o.setPhone(phone);
			o.setState(state);
			o.setTotalPrice(totalprice);
			o.setZipcode(zipcode);
			o.setFoods(fooditemlist);
			
			begin();
			getSession().save(o);
			commit();
			return o;
			
		}catch(HibernateException e){
			rollback();
			throw new OrderException("Could not add this order" + o,e);
		}
	}
}