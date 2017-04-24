package com.yusuf.spring.pojo;

public class Advert {

	private long id;
	private String title;
	private String message;
	private String categoryTitle;
	private Category category;

	public Advert(String title, String message, Category category) {
		this.title = title;
		this.message = message;
		this.category = category;
		this.categoryTitle = category.getTitle();
	}

	Advert() {
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	protected long getId() {
		return id;
	}

	protected void setId(long id) {
		this.id = id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getCategoryTitle() {
		return categoryTitle;
	}

	public void setCategoryTitle(String categoryTitle) {
		this.categoryTitle = categoryTitle;
	}
}