package com.me.delivery.controller;

import java.util.ArrayList;
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
import com.me.delivery.pojo.Customer;
import com.me.delivery.pojo.Food;
import com.me.delivery.pojo.Fooditem;
import com.me.delivery.pojo.Order;
import com.me.delivery.pojo.User;
import com.me.delivery.validator.OrderValidator;
import com.me.delivery.validator.RestaurantValidator;

@Controller
public class OrderController {
	
	@Autowired
	@Qualifier("orderDao")
	OrderDAO orderDao;

	@Autowired
	@Qualifier("orderValidator")
	OrderValidator validator;

	@RequestMapping(value="/checkout", method=RequestMethod.POST)
	public ModelAndView goToCheckout(HttpServletRequest request){
		

		
		String restaurantid =request.getParameter("restaurantid");
		int foodcount=Integer.parseInt(request.getParameter("foodcount"));
		String totalprice = request.getParameter("totalprice");
		
		if(foodcount==0 ){
			return new ModelAndView("error", "errorMessage", "select at least one food");
		}
		
		List<Fooditem> fooditemlist = new ArrayList<Fooditem>();
		for(int i = 0; i<foodcount; i++){
			Fooditem fooditem = new Fooditem();
			String name=request.getParameter("food"+i);
			System.out.println("name"+name);
			String quantity = request.getParameter("quantity"+i);
			System.out.println("quantity"+quantity);
			fooditem.setName(name);
			fooditem.setCount(quantity);
			fooditemlist.add(fooditem);
		}
		for(Fooditem i:fooditemlist){
			System.out.println(i.getName()+"  "+i.getCount());
		}
		ModelAndView mv = new ModelAndView("order","fooditemlist",fooditemlist);
		mv.addObject("totalprice", totalprice);
		mv.addObject("restaurantid", restaurantid);
		mv.addObject("foodcount",foodcount);
		return mv;
	}
	
	@RequestMapping(value="/ordersuccess", method=RequestMethod.POST)
	public ModelAndView getFullOrderInformation(HttpServletRequest request){
		System.out.println("placing order...");
		try {
			String address = request.getParameter("address");
			System.out.println(address);
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
			String totalprice = request.getParameter("totalprice");
			String zipcode = request.getParameter("zipcode");
			String restaurantid = request.getParameter("restaurantid");
			int foodcount = Integer.parseInt(request.getParameter("foodcount"));
			
			User u = (User)request.getSession().getAttribute("user");
			String customerid = String.valueOf(u.getId());
			
			List<Fooditem> fooditemlist = new ArrayList<Fooditem>();
			for(int i = 0; i<foodcount; i++){
				Fooditem fooditem = new Fooditem();
				String name=request.getParameter("food"+i);
				System.out.println("name"+name);
				String quantity = request.getParameter("quantity"+i);
				System.out.println("quantity"+quantity);
				fooditem.setName(name);
				fooditem.setCount(quantity);
				fooditemlist.add(fooditem);
			}
			
			Order order = (Order)orderDao.setFullOrder(address,billingzip,cardNum,ccv,city,expMonth,expYear,firstname,lastname,phone,state,totalprice,zipcode,fooditemlist);
//			CustomerController.saveOrder(order, customerid);
			return new ModelAndView("orderSuccess","order",order);
		} catch(OrderException e){
			return new ModelAndView("error", "errorMessage", "error creating order");
		}
	}
	
//	@RequestMapping(value="/ordersuccess", method=RequestMethod.POST)
//	public ModelAndView placeOrder(HttpServletRequest request){
//		try {
//			String address = request.getParameter("address");
//			String billingzip = request.getParameter("billingzip");
//			String cardNum = request.getParameter("cardNum");
//			String ccv = request.getParameter("ccv");
//			String city = request.getParameter("city");
//			String expMonth = request.getParameter("expMonth");
//			String expYear = request.getParameter("expYear");
//			String firstname = request.getParameter("firstname");
//			String lastname = request.getParameter("lastname");
//			String phone = request.getParameter("phone");
//			String state = request.getParameter("state");
//			String tip = request.getParameter("tip");
//			String totalprice = request.getParameter("totalprice");
//			String zipcode = request.getParameter("zipcode");
//			Order order = (Order)orderDao.setFullOrder(address,billingzip,cardNum,ccv,city,expMonth,expYear,firstname,lastname,phone,state,tip,totalprice,zipcode);
//			
////			order.setStatus(true);
//
//			return new ModelAndView("orderSuccess","order",order);
//		} catch(OrderException e){
//			return new ModelAndView("error", "errorMessage", "error place order");
//		}
//	}
	
}