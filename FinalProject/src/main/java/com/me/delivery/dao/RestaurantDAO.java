package com.me.delivery.dao;

import org.hibernate.HibernateException;

import java.util.List;
import java.util.Set;
//import org.hibernate.Query;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;
import org.hibernate.criterion.Restrictions;

import com.me.delivery.pojo.Restaurant;
import com.me.delivery.exception.RestaurantException;
import com.me.delivery.pojo.Address;

@Repository
public class RestaurantDAO extends DAO {

	public RestaurantDAO() {
	}
	
//	public Set<Restaurant> searchRestaurantByAddress(String address){
//		
//		Criteria crit = getSession().createCriteria(Address.class)
//				.add(Restrictions.ilike("street",address));
//		
//		return null;
//	}
	
	public List<Restaurant> searchRestaurantByZipcode(String zipcode) throws RestaurantException{
		try{
			begin();
			Criteria crit = getSession().createCriteria(Restaurant.class);
			List list = crit.add(Restrictions.eq("zipcode",zipcode)).list();
			commit();
			return list;
		}catch(HibernateException e){
			rollback();
			throw new RestaurantException("Could not find this zipcode: " + zipcode, e);
		}
	}
}