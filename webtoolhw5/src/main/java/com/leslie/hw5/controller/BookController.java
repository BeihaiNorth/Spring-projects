package com.leslie.hw5.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.leslie.hw5.pojo.Book;

@Controller
public class BookController extends MyController {
	
	/**************************/
	/***go to book home page***/
	/**************************/
	@RequestMapping(value = "/book/home.htm", method = RequestMethod.GET)
	public ModelAndView showBookHome() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("bookHome");
		return mv;
	}
	
	/**************************/
	/****go add more books*****/
	/**************************/
	//home --> bookNewNum
	@RequestMapping(value = "/book/addnumber.htm", method = RequestMethod.GET)
	public ModelAndView bookNewNum() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("bookNewNum");
		return mv;
	}
	//bookNewNum --> bookAddNew
	@RequestMapping(value = "/book/addnew.htm", method = RequestMethod.POST)
	public ModelAndView bookAddNew(HttpServletRequest request) {
		int number = Integer.parseInt(request.getParameter("num"));
		return new ModelAndView("bookAddNew","number",number);
	}
	//bookAddNew --> bookAdded
	@RequestMapping(value = "/book/success.htm", method = RequestMethod.GET)
	public ModelAndView bookAdded(HttpServletRequest request) {
		//total number of books requested
		int totalnumber = Integer.parseInt(request.getParameter("num"));
		int successnumber = totalnumber;
		ModelAndView mv = new ModelAndView("bookAdded","totalnumber",totalnumber);
		
//		Session session = getSession();
//		try{
//			session.beginTransaction();
//		}catch(Exception e){
//			System.out.println("cannot begin transaction:"+e);
//		}
		
		ArrayList<Book> booklist = new ArrayList<Book>();
		for(int i = 1; i <= totalnumber; i++){
			Session session = getSession();
			try{
				session.beginTransaction();
			}catch(Exception e){
				System.out.println("cannot begin transaction:"+e);
			}
			
			String isbn = request.getParameter("isbn"+ i);
			String title = request.getParameter("title"+i);
			String auther = request.getParameter("author" + i);
			float price = Float.parseFloat(request.getParameter("price"+i));
			Book book = new Book();
			book.setIsbn(isbn);
			book.setAuthers(auther);
			book.setTitle(title);
			book.setPrice(price);
			try{
				session.save(book);
				session.getTransaction().commit();
			}catch(Exception e){
				System.out.println("cannot submit book:"+title+". Error:" + e);
				session.getTransaction().rollback();
				successnumber--;
			}finally{
				session.close();
			}
			
		}
		mv.addObject("successnumber", successnumber);
		return mv;
	}

	
}
