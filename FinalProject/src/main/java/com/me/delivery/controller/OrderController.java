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

import com.me.delivery.dao.OrderDAO;
import com.me.delivery.dao.RestaurantDAO;
import com.me.delivery.exception.OrderException;
import com.me.delivery.exception.RestaurantException;
import com.me.delivery.pojo.Food;
import com.me.delivery.pojo.Order;
import com.me.delivery.validator.OrderValidator;
import com.me.delivery.validator.RestaurantValidator;

@Controller
public class OrderController {
	
	@Autowired
	@Qualifier("orderDao")
	OrderDAO orderDao;;

	@Autowired
	@Qualifier("orderValidator")
	OrderValidator validator;

	@RequestMapping(value="/checkout", method=RequestMethod.GET)
	public ModelAndView goToCheckout(HttpServletRequest request){
		String quantity = request.getParameter("quantity1");
		String foodname = request.getParameter("food1");
		String restaurantid =request.getParameter("restaurantid");
		try {
			List<Food> foodlist = orderDao.collectOrderFood(quantity,foodname,restaurantid);
			return new ModelAndView("order","foodlist",foodlist);
		} catch(OrderException e){
			return new ModelAndView("error", "errorMessage", "error while search food");
		}
	}
	
	@RequestMapping(value="/orderconfirm", method=RequestMethod.POST)
	public ModelAndView getFullOrderInformation(HttpServletRequest request){
		try {
			String address = request.getParameter("address");
			String billingzip = request.getParameter("billingzip");
			String cardNum = request.getParameter("cardNum");
			String ccv = request.getParameter("ccv");
			String city = request.getParameter("city");
			String expMonth = request.getParameter("expMonth");
			String expYear = request.getParameter("expYear");
			String firstname = request.getParameter("firstname");
			String lastname = request.getParameter("lastname");
			String phone = request.getParameter("phone");
			String state = request.getParameter("state");
			String tip = request.getParameter("tip");
			String totalprice = request.getParameter("totalprice");
			String zipcode = request.getParameter("zipcode");
			Order order = (Order)orderDao.setFullOrder(address,billingzip,cardNum,ccv,city,expMonth,expYear,firstname,lastname,phone,state,tip,totalprice,zipcode);
			
			return new ModelAndView("orderCheck","order",order);
		} catch(OrderException e){
			return new ModelAndView("error", "errorMessage", "error creating order");
		}
	}
	
	@RequestMapping(value="/ordersuccess", method=RequestMethod.POST)
	public ModelAndView placeOrder(HttpServletRequest request){
		try {
			String address = request.getParameter("address");
			String billingzip = request.getParameter("billingzip");
			String cardNum = request.getParameter("cardNum");
			String ccv = request.getParameter("ccv");
			String city = request.getParameter("city");
			String expMonth = request.getParameter("expMonth");
			String expYear = request.getParameter("expYear");
			String firstname = request.getParameter("firstname");
			String lastname = request.getParameter("lastname");
			String phone = request.getParameter("phone");
			String state = request.getParameter("state");
			String tip = request.getParameter("tip");
			String totalprice = request.getParameter("totalprice");
			String zipcode = request.getParameter("zipcode");
			Order order = (Order)orderDao.setFullOrder(address,billingzip,cardNum,ccv,city,expMonth,expYear,firstname,lastname,phone,state,tip,totalprice,zipcode);
			
			order.setStatus(true);

			return new ModelAndView("orderSuccess");
		} catch(OrderException e){
			return new ModelAndView("error", "errorMessage", "error while search food");
		}
	}
	
}