package com.leslie.hw5.pojo;

public class Book {
    private String isbn;
    private String title;
    private String authers;
    private float price;
    
    public Book(){
        
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthers() {
        return authers;
    }

    public void setAuthers(String authers) {
        this.authers = authers;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    
    
}
