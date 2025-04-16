import { useState } from 'react';
import Tabs from '../components/ui/Tabs.jsx'

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

const Category = () => {
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
                />
            </section>
        </div>
    )
}

export default Category;