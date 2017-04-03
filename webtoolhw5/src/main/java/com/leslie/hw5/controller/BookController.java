package com.leslie.hw5.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
	@RequestMapping(value = "/book/addnumber.htm", method = RequestMethod.GET)
	public ModelAndView bookNewNum() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("bookNewNum");
		return mv;
	}
	
	@RequestMapping(value = "/book/addnew.htm", method = RequestMethod.GET)
	public ModelAndView bookAddNew() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("bookAddNew");
		return mv;
	}
	
	@RequestMapping(value = "/book/success.htm", method = RequestMethod.GET)
	public ModelAndView bookAdded() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("bookAdded");
		return mv;
	}

	
}
