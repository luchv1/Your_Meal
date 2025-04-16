import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import MealCard from "../components/ui/MealCard.jsx";

const YourMeal = () => {
    const Meals = [
        {
            "name": "Baked salmon with fennel & tomatoes",
            "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg",
            "id": "52959"
        },
        {
            "name": "Cajun spiced fish tacos",
            "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg",
            "id": "52819"
        },
        {
            "name": "Escovitch Fish",
            "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg",
            "id": "52944"
        },
        {
            "name": "Fish fofos",
            "image": "https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg",
            "id": "53043"
        },
    ];
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div className="your-meal-container">
            {!isAuthenticated && <h3 className="login-warning">Please login to show your meal ! </h3>}
            {isAuthenticated &&
                <div className="container">
                    <div className="section-header">
                        <h2>Recipe Collection</h2>
                        <p>Pick Your Perfect Meal</p>
                    </div>
                    <div className="meal-cards">
                        {Meals && Meals.map((meal) => (
                            <MealCard
                                key={meal.id}
                                name={meal.name}
                                img={meal.image}
                                mealId={meal.id}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default YourMeal;



