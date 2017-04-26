package com.me.delivery.controller;

import java.util.List;

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
import com.me.delivery.pojo.Restaurant;
import com.me.delivery.validator.RestaurantValidator;

@Controller
public class RestaurantController {
	@Autowired
	@Qualifier("restaurantDao")
	RestaurantDAO restaurantDao;;

	@Autowired
	@Qualifier("restaurantValidator")
	RestaurantValidator validator;

	@RequestMapping(value="/search", method=RequestMethod.GET)
	public ModelAndView searchRests(HttpServletRequest request){
		System.out.println("Searching restaurants...");
		String zipcode = request.getParameter("key");
		try{
			List<Restaurant> list = restaurantDao.searchRestaurantByZipcode(zipcode);
			return new ModelAndView("searchList","list",list);
		}catch(RestaurantException e){
			return new ModelAndView("error", "errorMessage", "error while search");
		}
		
	}

	@RequestMapping(value="/restaurant.htm", method=RequestMethod.GET)
	public ModelAndView gotoRestHome(HttpServletRequest request){
		System.out.println("Go to restaurant menu page...");
		String id = request.getParameter("id");
		try{
			Restaurant r = restaurantDao.getRestById(id);
			return new ModelAndView("restaurant", "restaurant",r);
		}catch(RestaurantException e){
			return new ModelAndView("error", "errorMessage", "error while going to restaurant menu page");
		}
	}
}