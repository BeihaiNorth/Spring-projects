package com.me.delivery.exception;

public class OrderException extends Exception {

	public OrderException(String message)
	{
		super("RestaurantException-"+message);
	}
	
	public OrderException(String message, Throwable cause)
	{
		super("RestaurantException-"+message,cause);
	}
	
}
