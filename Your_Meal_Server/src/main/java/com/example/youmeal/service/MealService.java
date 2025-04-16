package com.example.youmeal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.youmeal.model.Meals;
import com.example.youmeal.model.Users;
import com.example.youmeal.repo.MealRepo;

@Service
public class MealService {
    
    private final MealRepo mealRepo;

    public MealService(MealRepo mealRepo) {
        this.mealRepo = mealRepo;
    }

    public List<Meals> findMealsByUsername(Users user) {
        return mealRepo.findByUser(user);
    }

    public Meals saveMeal(Meals meal) {
        return mealRepo.save(meal);
    }

    public Meals updateMeal(Integer mealId, Meals mealDetails) {
        Meals meal = mealRepo.findById(mealId).orElseThrow(() -> new RuntimeException("Meal not found"));
        meal.setName(mealDetails.getName());
        meal.setImage(mealDetails.getImage());
        return mealRepo.save(meal);
    }


    public void deleteMeal(Integer mealId) {
        mealRepo.deleteById(mealId);
    }
}