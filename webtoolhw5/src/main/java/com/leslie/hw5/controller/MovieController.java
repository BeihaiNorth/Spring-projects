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
	@RequestMapping(value = "/movie/result.htm", method = RequestMethod.GET)
	public ModelAndView searchMovie(HttpServletRequest request){
		
		String type = request.getParameter("searchtype");
		String keyword = request.getParameter("keyword");
		List<Movie> movielist = null;
		
		Session session = getSession();
		
		if(type.equals("title")){
			session.enableFilter("titleFilter").setParameter("titleFilterParam", keyword);
		}else if(type.equals("actor")){
			session.enableFilter("actorFilter").setParameter("actorFilterParam", keyword);
		}else if(type.equals("actress")){
			session.enableFilter("actressFilter").setParameter("actressFilterParam", keyword);
		}else if(type.equals("genre")){
			session.enableFilter("genreFilter").setParameter("genreFilterParam", keyword);
		}else if(type.equals("year")){
			session.enableFilter("yearFilter").setParameter("yearFilterParam", keyword);
		}else{
			return new ModelAndView("movieError","movieList", movielist);
		}
		Query q = session.createQuery("from Movie"); // this Movie with a capital"M", means Movie class, not movie table
		movielist = q.list();
		return new ModelAndView("movieSearchResult","movieList", movielist);
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
	
	//movieAddNew --> movieAdded.jsp
	@RequestMapping(value = "/movie/success.htm", method = RequestMethod.POST)
	public ModelAndView addMovie(HttpServletRequest request){
		Session hibernatesession = getSession();

		String title = request.getParameter("title");
		String actor = request.getParameter("actor");
		String actress = request.getParameter("actress");
		String genre = request.getParameter("genre");
		int year = Integer.parseInt(request.getParameter("year"));
		Movie movie = new Movie();
		//manually assign title, for the id generator class is "assigned".
		movie.setTitle(title);
		movie.setActor(actor);
		movie.setActress(actress);
		movie.setGenre(genre);
		movie.setYear(year);
		try {
			hibernatesession.beginTransaction();
			hibernatesession.save(movie);
			hibernatesession.getTransaction().commit();
			System.out.println("movie added!:" + title);
		} catch (Exception e) {
			System.out.println("Cannot add movie! " + e);
			hibernatesession.getTransaction().rollback();
			return new ModelAndView("movieError", "error", e);
		} finally {
			hibernatesession.close();
		}
		return new ModelAndView("movieAdded", "movie", movie);
	}

	
}
