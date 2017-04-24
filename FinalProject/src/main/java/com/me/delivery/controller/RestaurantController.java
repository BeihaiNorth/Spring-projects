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

import com.me.delivery.dao.RestaurantDAO;
import com.me.delivery.exception.RestaurantException;
import com.me.delivery.pojo.User;
import com.me.delivery.validator.RestaurantValidator;

@Controller
//@RequestMapping("/user/*")
public class RestaurantController {
	@Autowired
	@Qualifier("restaurantDao")
	RestaurantDAO restaurantDao;;

	@Autowired
	RestaurantValidator validator;

	@InitBinder
	private void initBinder(WebDataBinder binder) {
		binder.setValidator(validator);
	}
	
	@RequestMapping(value="/search", method=RequestMethod.GET)
	public ModelAndView searchRests(HttpServletRequest request){
		String zipcode = request.getParameter("key");
		try{
			restaurantDao.searchRestaurantByZipcode(zipcode);
			return new ModelAndView("");
		}catch(){
			
		}
		
	}
}