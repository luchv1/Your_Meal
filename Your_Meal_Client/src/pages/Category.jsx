import { useState } from 'react';
import Tabs from '../components/ui/Tabs.jsx'
import useHttp from '../hooks/useHttp.js';

const categories = [
    {
        "idCategory": "1",
        "label": "Beef",
    },
    {
        "idCategory": "2",
        "label": "Chicken",
    },
    {
        "idCategory": "3",
        "label": "Dessert",
    },
    {
        "idCategory": "4",
        "label": "Lamb",
    },
];

const init =  {};

const Category = () => {
    const BeefCategory = useHttp('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', init, []);
    const chickenCategory = useHttp('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken', init, []);
    const dessertCategory = useHttp('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', init, []);
    const lambCategory = useHttp('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb', init, []);

    // const listData = [BeefCategory, chickenCategory, dessertCategory, lambCategory];
    const defaultTab = categories[0].label;
    const [activeTab, setActiveTab] = useState(defaultTab);
    // categories.map((index, item) => item.meals = {...listData[index]});
    categories[0].content = BeefCategory.data?.meals?.[0].strMeal
    categories[1].content = chickenCategory.data?.meals?.[0].strMeal
    categories[2].content = dessertCategory.data?.meals?.[0].strMeal
    categories[3].content = lambCategory.data?.meals?.[0].strMeal

    console.log(categories)
    return (
        <div className="category-page">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Find Your Perfect Recipe</h1>
                            <p>Discover recipes by meal type, country of origin, or even by mood!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="filter-container">
                <Tabs
                    classes="primary-button w100 tab"
                    tabs={categories}
                    init={defaultTab}
                />
            </section>
        </div>
    )
}

export default Category;