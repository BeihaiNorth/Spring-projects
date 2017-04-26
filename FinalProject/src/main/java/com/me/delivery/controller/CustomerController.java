package com.me.delivery.controller;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.me.delivery.dao.CustomerDAO;
import com.me.delivery.exception.CustomerException;
import com.me.delivery.pojo.Customer;
import com.me.delivery.pojo.Email;
import com.me.delivery.pojo.User;
import com.me.delivery.validator.CustomerValidator;

@Controller
public class CustomerController {

	@Autowired
	@Qualifier("customerDao")
	CustomerDAO customerDao;

	@Autowired
	@Qualifier("customerValidator")
	CustomerValidator validator;
	
	
	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	protected ModelAndView loginUser(HttpServletRequest request) throws Exception {
		HttpSession session = (HttpSession) request.getSession();
		try {
			System.out.print("/loginUser: ");
			Customer c = customerDao.get(request.getParameter("signin-username"), request.getParameter("signin-password"));
			
			if(c == null){
				System.out.println("User username/Password does not exist");
				session.setAttribute("errorMessage", "UserName/Password does not exist");//setAttribute(java.lang.String name, java.lang.Object value) 
				return new ModelAndView("error");
			}
			
			session.setAttribute("user", c);
			Enumeration attributeNames = session.getAttributeNames();
			while (attributeNames.hasMoreElements()) {
			    String name = attributeNames.nextElement().toString();
			    String value =session.getAttribute(name).toString();
			    System.out.println(name + "=" + value);
			}
			return new ModelAndView("searchList");

		} catch (CustomerException e) {
			System.out.println("Exception: " + e.getMessage());
			session.setAttribute("errorMessage", "error while login");
			return new ModelAndView("error");
		}
	}
	
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	protected ModelAndView signupNewUser(HttpServletRequest request) throws Exception {

		System.out.println("in controller registering new user ");
		String username = request.getParameter("signup-username");
		String emailaddress = request.getParameter("signup-email"); 
		String password = request.getParameter("signup-password"); 
		
//		validator.validate(user, result);
		System.out.println("entering signup method");


		try {
			System.out.print("register New User");
			Customer c = customerDao.signup(username, emailaddress, password);
			HttpSession session = request.getSession();
			session.setAttribute("user", c);
			System.out.println(request.getSession().getAttribute("user").toString());
			return new ModelAndView("home", "user", c);
		} catch (CustomerException e) {
			System.out.println("Exception: " + e.getMessage());
			return new ModelAndView("error", "errorMessage", "error while login");
		}
	}

}
