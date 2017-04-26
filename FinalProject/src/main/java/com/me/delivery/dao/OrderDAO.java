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
import com.me.delivery.pojo.Restaurant;
import com.me.delivery.exception.OrderException;
import com.me.delivery.exception.RestaurantException;

@Repository
public class OrderDAO extends DAO {

	public OrderDAO() {
	}
	
	
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
	
	public Restaurant setFullOrder(String address,String billingzip,String cardNum,String ccv,String city,
			String expMonth,String expYear,String firstname,String lastname,String phone,String state,String tip,
			String totalprice,String zipcode) throws RestaurantException{
		try{
			long id = Long.parseLong(key);
			begin();
			Criteria crit = getSession().createCriteria(Restaurant.class);
			Restaurant r = (Restaurant)crit.add(Restrictions.idEq(id)).uniqueResult();
			commit();
			return r;
		}catch(HibernateException e){
			rollback();
			throw new OrderException("Could not find restaurant with this id: " + key,e);
		}
	}
}