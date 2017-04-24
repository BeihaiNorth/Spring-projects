package com.me.delivery.exception;

public class RestaurantException extends Exception {

	public RestaurantException(String message)
	{
		super("RestaurantException-"+message);
	}
	
	public RestaurantException(String message, Throwable cause)
	{
		super("RestaurantException-"+message,cause);
	}
	
}
