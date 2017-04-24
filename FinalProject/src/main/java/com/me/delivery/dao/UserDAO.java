package com.me.delivery.dao;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.me.delivery.exception.RestaurantException;
import com.me.delivery.pojo.Email;
import com.me.delivery.pojo.User;

@Repository
public class UserDAO extends DAO {

	public UserDAO() {
	}

	public User get(String email, String password) throws RestaurantException {
		try {
			begin();
			Query q = getSession().createQuery("from User where username = :username and password = :password");
			q.setString("username", email);
			q.setString("password", password);			
			User user = (User) q.uniqueResult();
			commit();
			return user;
		} catch (HibernateException e) {
			rollback();
			throw new RestaurantException("Could not get user " + email, e);
		}
	}
	
	public User get(int userId) throws RestaurantException {
		try {
			begin();
			Query q = getSession().createQuery("from User where personID= :personID");
			q.setInteger("personID", userId);		
			User user = (User) q.uniqueResult();
			commit();
			return user;
		} catch (HibernateException e) {
			rollback();
			throw new RestaurantException("Could not get user " + userId, e);
		}
	}

	public User register(User u)
			throws RestaurantException {
		try {
			begin();
			System.out.println("inside DAO");

			Email email = new Email(u.getEmail().getEmailAddress());
			User user = new User(u.getUsername(), u.getPassword());

			user.setFirstName(u.getFirstName());
			user.setLastName(u.getLastName());
			user.setEmail(email);
			email.setUser(user);
			getSession().save(user);
			commit();
			return user;

		} catch (HibernateException e) {
			rollback();
			throw new RestaurantException("Exception while creating user: " + e.getMessage());
		}
	}

	public void delete(User user) throws RestaurantException {
		try {
			begin();
			getSession().delete(user);
			commit();
		} catch (HibernateException e) {
			rollback();
			throw new RestaurantException("Could not delete user " + user.getUsername(), e);
		}
	}
}