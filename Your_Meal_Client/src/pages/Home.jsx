import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSeaFoodMeal} from "../store/mealSlice.js";
import { startLoading, endLoading } from "../store/loadingSlice.js"


import chefImg from "/chef.png"
import MealCard from "../components/ui/MealCard.jsx";
import CategoryCard from "../components/ui/CategoryCard.jsx";
import SectionImg from "/section-img.png";
import Button from "../components/ui/Button.jsx";
import Loader from "../components/ui/Loader.jsx";

const Home = () => {
    const dispatch = useDispatch();
    const [Meals, setMeals] = useState();
    const { data, isLoading, error } = useSelector((state) => state.meal);
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        dispatch(startLoading());
        dispatch(fetchSeaFoodMeal());
    }, [dispatch]);

    useEffect(()=> {
        if (data?.meals) {
            setMeals(data.meals);
            dispatch(endLoading());
        }
    }, [data, dispatch])
    return (
        <main>
            {!isLoading && 
            <>
                <section className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>Cook Like a Pro with Our
                                    <span className="text-accent">Easy</span>
                                    and <span className="text-accent">Tasty</span>
                                    Recipes
                                </h1>
                                <p>From quick and easy meals to gourmet delights,
                                    we have something for every taste and occasion.
                                </p>

                                <Link to="/">
                                    <Button classes="seconds-button">Explore Recipes</Button>
                                </Link>
                            </div>

                            <div className="hero-image">
                                <img src={chefImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular-recipe">
                    <div className="container">
                        <div className="section-header">
                            <h2>Popular Recipes You Can't Miss</h2>
                            <p>Discover new flavors and cooking techniques with our diverse selection of cuisine types.</p>
                        </div>
                        <div className="meal-cards">
                            {Meals && Meals?.slice(0,4).map((meal) => (
                                <MealCard 
                                    key={meal.idMeal}
                                    name={meal.strMeal}
                                    img={meal.strMealThumb}
                                    mealId={meal.idMeal}
                                />
                            ))}
                        </div>
                        {/* <div className="pagination">
                            <button className="pagination-btn prev">
                                <ChevronLeft size={16}/>
                            </button>
                            <button className="pagination-btn action">1</button>
                            <button className="pagination-btn next">
                                <ChevronRight size={16}/>
                            </button>

                        </div> */}
                    </div>
                </section>
                <section className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>Join Our Latest Contest</h1>
                                <p>Discover new flavors and cooking techniques
                                    with our diverse section of cuisine types
                                </p>

                                <Link to="/">
                                    <Button classes="seconds-button"> Collection </Button>
                                </Link>
                            </div>

                            <div className="hero-image">
                                <img src={SectionImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="by-category">
                    <div className="container">
                        <div className="section-header">
                            <h2>Recipe Collection</h2>
                            <p>Pick Your Perfect Meal</p>
                        </div>
                        <div className="meal-cards">
                            {Meals && Meals?.slice(15, 19).map((meal) => (
                                <CategoryCard
                                    key={meal.idMeal}
                                    name={meal.strMeal} 
                                    img={meal.strMealThumb}
                                    mealId={meal.idMeal}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </>
            }
        </main>
    )
}

export default Home;