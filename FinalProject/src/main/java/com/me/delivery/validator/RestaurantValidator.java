package com.me.delivery.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.me.delivery.pojo.Restaurant;

public class RestaurantValidator implements Validator {

	public boolean supports(Class aClass) {
		return aClass.equals(Restaurant.class);
	}

	public void validate(Object obj, Errors errors) {
		Restaurant rest = (Restaurant) obj;
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "searchkey", "error.invalid.searchkey", "Zip Code Required");
		
		// check if user exists
		
	}
}
