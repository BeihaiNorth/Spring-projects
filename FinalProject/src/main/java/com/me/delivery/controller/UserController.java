package com.me.delivery.controller;

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
import com.me.delivery.dao.UserDAO;
import com.me.delivery.exception.UserException;
import com.me.delivery.pojo.User;
import com.me.delivery.validator.UserValidator;

@Controller
@RequestMapping("/user/*")
public class UserController {

	@Autowired
	@Qualifier("userDao")
	UserDAO userDao;

	@Autowired
	@Qualifier("userValidator")
	UserValidator validator;

	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(validator);
	}
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	protected String goToUserHome(HttpServletRequest request) throws Exception {
//		return "user-home";
//	}
	
	
	@RequestMapping(value = "/user/signin", method = RequestMethod.POST)
	protected String loginUser(HttpServletRequest request) throws Exception {
		HttpSession session = (HttpSession) request.getSession();
		try {
			System.out.print("loginUser");
			User u = userDao.get(request.getParameter("signin-email"), request.getParameter("sing-password"));
			
			if(u == null){
				System.out.println("User Email/Password does not exist");
				session.setAttribute("errorMessage", "UserName/Password does not exist");//setAttribute(java.lang.String name, java.lang.Object value) 
				return "error";
			}
			
			session.setAttribute("user", u);
			return "home";

		} catch (UserException e) {
			System.out.println("Exception: " + e.getMessage());
			session.setAttribute("errorMessage", "error while login");
			return "error";
		}
	}
	
	
	@RequestMapping(value = "/user/signup", method = RequestMethod.POST)
	protected ModelAndView registerNewUser(HttpServletRequest request,  @ModelAttribute("user") User user, BindingResult result) throws Exception {

		validator.validate(user, result);
		System.out.println("entering signup method");

		if (result.hasErrors()) {
			return new ModelAndView("home", "user", user);
		}

		try {
			System.out.print("registerNewUser");
			User u = userDao.register(user);
			request.getSession().setAttribute("user", u);
			return new ModelAndView("home", "user", u);
		} catch (UserException e) {
			System.out.println("Exception: " + e.getMessage());
			return new ModelAndView("error", "errorMessage", "error while login");
		}
	}

}
