import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react"

import chefImg from "/chef.png"
import MealCard from "../components/ui/MealCard.jsx";
import CategoryCard from "../components/ui/CategoryCard.jsx";
import SectionImg from "/section-img.png";
import useHttp from "../hooks/useHttp";
import Button from "../components/ui/Button.jsx";

const init =  {};
const Home = () => {
    const {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    } = useHttp('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',init, []);
    const loadMeal = data;
    const Meals = loadMeal?.meals?.sort(() => 0.5 - Math.random()).slice(0,4);

    const recipeCollection = loadMeal?.meals?.slice(15, 19);
    return (
        <main>
            {isLoading && 
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
                            {Meals && Meals.map((meal) => (
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
                                    <Button classes="seconds-button"> </Button>
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
                            {recipeCollection && recipeCollection.map((meal) => (
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
            {!isLoading && <p>Loading ...</p>}
        </main>
    )
}

export default Home;