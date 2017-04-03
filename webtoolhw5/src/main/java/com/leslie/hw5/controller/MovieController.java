package com.leslie.hw5.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.leslie.hw5.pojo.Movie;

@Controller
public class MovieController extends MyController {
	/**************************/
	/**go to movie home page***/
	/**************************/
	@RequestMapping(value = "/movie/home.htm", method = RequestMethod.GET)
	public ModelAndView showMovieHome() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("movieHome");
		return mv;
	}
	
	/**************************/
	/***search movie by type***/
	/**************************/
	@RequestMapping(value = "/movie/browse.htm", method = RequestMethod.GET)
	public ModelAndView browseMovie(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("movieSearch");
		return mv;
	}
	@RequestMapping(value = "/movie/search.htm", method = RequestMethod.GET)
	public ModelAndView searchMovie(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("movieSearchResult");
		return mv;
	}
	
	/**************************/
	/***go add movies to DB****/
	/**************************/
	@RequestMapping(value = "/movie/add.htm", method = RequestMethod.GET)
	public ModelAndView goAddMovie(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("movieAddNew");
		return mv;
	}
	
	@RequestMapping(value = "/movie/success.htm", method = RequestMethod.POST)
	public ModelAndView addMovie(HttpServletRequest request){
		Session hibernatesession = getSession();

		String title = request.getParameter("title");
		String actor = request.getParameter("actor");
		String actress = request.getParameter("actress");
		String genre = request.getParameter("genre");
		String year = request.getParameter("year");
		Movie movie = new Movie();
		try {
			hibernatesession.beginTransaction();
			hibernatesession.save(movie);
			hibernatesession.getTransaction().commit();
			System.out.println("movie added!:" + title);
		} catch (HibernateException e) {
			System.out.println("Cannot add movie! " + e);
			hibernatesession.getTransaction().rollback();
		} finally {
			hibernatesession.close();
		}
		return new ModelAndView("movieAdded", "movie", movie);
	}

	
}
