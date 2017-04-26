package com.me.delivery.exception;

public class CustomerException extends Exception {

	public CustomerException(String message)
	{
		super("UserException-"+message);
	}
	
	public CustomerException(String message, Throwable cause)
	{
		super("UserException-"+message,cause);
	}
	
}
