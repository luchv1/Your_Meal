package com.example.youmeal.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.youmeal.model.Meals;
import com.example.youmeal.model.Users;

@Repository
public interface MealRepo extends JpaRepository<Meals, Integer> {
    List<Meals> findByUser(Users user);
}
