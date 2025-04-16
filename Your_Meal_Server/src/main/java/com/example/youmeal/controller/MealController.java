package com.example.youmeal.controller;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import com.example.youmeal.model.Meals;
import com.example.youmeal.model.Users;
import com.example.youmeal.service.MealService;
import com.example.youmeal.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("your-meal")
public class MealController {
    
    private final MealService mealService;
    private final UserService userService;

    public MealController(MealService mealService, UserService userService) {
        this.mealService = mealService;
        this.userService = userService;
    }

    // Get all meals for a specific user
    @GetMapping("/{username}")
    public ResponseEntity<List<Meals>> getMealsByUsername(@PathVariable String username) {

        Users user = userService.findUserByUsername(username);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        List<Meals> meals = mealService.findMealsByUsername(user);

        if (meals.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(meals);
    }

    // Create a new meal
    @PostMapping("/create/{username}")
    public ResponseEntity<Meals> createMeal(@RequestBody Meals meal, @PathVariable String username) {
        Meals newMeals = new Meals();
        newMeals.setName(meal.getName());
        newMeals.setImage(meal.getImage());
        newMeals.setMealDetailId(meal.getMealDetailId());
        newMeals.setUser(userService.findUserByUsername(username));
        Meals createdMeal = mealService.saveMeal(newMeals);
        return ResponseEntity.ok(createdMeal);
    }

    // Update an existing meal
    @PutMapping("/{mealId}")
    public ResponseEntity<Meals> updateMeal(
        @PathVariable Integer mealId, 
        @RequestBody Meals mealDetails
    ) {
        Meals updatedMeal = mealService.updateMeal(mealId, mealDetails);
        return ResponseEntity.ok(updatedMeal);
    }

    // Delete a meal
    @DeleteMapping("/{mealId}")
    public ResponseEntity<Void> deleteMeal(@PathVariable Integer mealId) {
        mealService.deleteMeal(mealId);
        return ResponseEntity.ok().build();
    }
}
