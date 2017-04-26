package com.me.delivery.dao;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.me.delivery.exception.CustomerException;
import com.me.delivery.pojo.Customer;
import com.me.delivery.pojo.Email;
import com.me.delivery.pojo.User;

@Repository
public class CustomerDAO extends DAO {

	public CustomerDAO() {
	}

	public Customer get(String username, String password) throws CustomerException {
		System.out.println(username + "  " + password);
		try {
			begin();
			Query q = getSession().createQuery("from User where username = :username and password = :password");
			q.setString("username", username);
			q.setString("password", password);			
			Customer c = (Customer) q.uniqueResult();
			commit();
			return c;
		} catch (HibernateException e) {
			rollback();
			throw new CustomerException("Could not get user " + username, e);
		}
	}
	
	public Customer get(int userId) throws CustomerException {
		try {
			begin();
			Query q = getSession().createQuery("from User where personID= :personID");
			q.setInteger("personID", userId);		
			Customer c = (Customer) q.uniqueResult();
			commit();
			return c;
		} catch (HibernateException e) {
			rollback();
			throw new CustomerException("Could not get user " + userId, e);
		}
	}

	public Customer signup(String username, String emailaddress, String password)
			throws CustomerException {
		System.out.println("in customerDao registering new user ");
		try {
			begin();
			System.out.println("inside Customer DAO");
			

			Email email = new Email(emailaddress);
			Customer c = new Customer();
			c.setUsername(username);
			c.setPassword(password);

			c.setEmail(email);
			email.setUser(c);
			getSession().save(c);
			commit();
			return c;

		} catch (HibernateException e) {
			rollback();
			throw new CustomerException("Exception while creating user: " + e.getMessage());
		}
	}

	public void delete(User user) throws CustomerException {
		try {
			begin();
			getSession().delete(user);
			commit();
		} catch (HibernateException e) {
			rollback();
			throw new CustomerException("Could not delete user " + user.getUsername(), e);
		}
	}
}