import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Heart } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect, useState, useCallback } from "react";

import { startLoading, endLoading } from "../store/loadingSlice";
import { fetchDetailMeal } from "../store/mealDetailSlice";


const MealDetail = () => {
    const paramsData = useParams();
    const { data, isLoading, error } = useSelector((state) => state.mealDetail);
    const dispatch = useDispatch();
    const [ meal, setMeal ] = useState();
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        dispatch(startLoading());
        dispatch(fetchDetailMeal(paramsData.mealId));
    }, [dispatch, paramsData.mealId])

    useEffect(() => {
        if (data?.meals[0]) {
            setMeal(data?.meals[0]);
            dispatch(endLoading());
        }
    }, [data, dispatch]);

    const handleSaveMeal = (meal) => {
        const newMeal = {
            name: meal.strMeal,
            image: meal.strMealThumb,
            detail_id: meal.idMeal
        }
    }

    const mealInstructions = meal?.strInstructions?.split(".")?.filter((data) => data !== "");
    const mealIngredient = meal ? Object.keys(meal).filter((key) => key.startsWith("strIngredient") && meal[key])?.map((key) => meal[key]) : null;    
    return (
        <div className="detail-meal-page">
            {!isLoading && <div className="container">
                <div className="meal-info">
                    <div className="meal-img">
                        <img src={meal?.strMealThumb} alt="" />
                    </div>
                    <div className="ingredient-container">
                        <h2 className="ingredient-title">Ingredients</h2>
                        <ul>
                            {mealIngredient && 
                                mealIngredient.map((ingredient, index) => 
                            <li key={index}>{ingredient}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="meal-name">
                    <h2>{meal?.strMeal}</h2>
                    <Button onClick={()=> handleSaveMeal(meal)} classes="icon-button" >{< Heart size={40}/>}</Button>
                    <p></p>
                </div>
                <div className="instruction-container">
                    <h2>Step-by-Step Instructions</h2>
                    <ul>
                        {mealInstructions?.map((step, index) => 
                            <li key={index}>{step}</li>
                        )}
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default MealDetail;