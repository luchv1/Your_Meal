package com.example.youmeal.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "meals")
public class Meals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "detail_id")
    private String mealDetailId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private Users user;

    // Default constructor
    public Meals() {}

    public Meals(String name, String image, String mealDetailId, Users user) {
        this.name = name;
        this.image = image;
        this.mealDetailId = mealDetailId;
        this.user = user;
    }

    // Getters and setters for mealDetailId
    public String getMealDetailId() {
        return mealDetailId;
    }

    public void setMealDetailId(String mealDetailId) {
        this.mealDetailId = mealDetailId;
    }

    // Existing getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Meal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", image='" + image + '\'' +
                ", mealDetailId='" + mealDetailId + '\'' +
                ", user=" + (user != null ? user.getUsername() : "null") +
                '}';
    }
}