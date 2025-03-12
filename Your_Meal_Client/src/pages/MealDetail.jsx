import useHttp from "../hooks/useHttp";
import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { Heart } from "lucide-react"


const init = {};

const MealDetail = () => {
    const paramsData = useParams();
    const {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    } = useHttp(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramsData.mealId}`, init, []);

    const loadDetailMeal = isLoading && data;
    const mealData = isLoading && loadDetailMeal?.meals?.[0];
    const mealInstructions = mealData?.strInstructions?.split(".")?.filter((data) => data !== "");
    const mealIngredient = Object.keys(mealData).filter((key) => key.startsWith("strIngredient") && mealData[key])?.map((key) => mealData[key])
    
    return (
        <div className="detail-meal-page">
            {!isLoading && <div className="container">Loading meal ...</div>}
            {isLoading && <div className="container">
                <div className="meal-info">
                    <div className="meal-img">
                        <img src={mealData.strMealThumb} alt="" />
                    </div>
                    <div className="ingredient-container">
                        <h2 className="ingredient-title">Ingredients</h2>
                        <ul>
                            {mealIngredient && 
                                mealIngredient.map((ingredient) => 
                            <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="meal-name">
                    <h2>{mealData.strMeal}</h2>
                    <Button classes="icon-button" >{< Heart size={40}/>}</Button>
                    <p></p>
                </div>
                <div className="instruction-container">
                    <h2>Step-by-Step Instructions</h2>
                    <ul>
                        {mealInstructions.map((step) => 
                            <li key={step}>{step}</li>
                        )}
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default MealDetail;