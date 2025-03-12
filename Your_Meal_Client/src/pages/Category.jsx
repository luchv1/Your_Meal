

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
                <div className="filter-tabs">
                    <button>By Meal Type</button>
                    <button>By Country</button>
                    <button>By Mood</button>
                </div>
                <div className="filter-options">
                    <button>VietNam</button>
                    <button>US</button>
                    <button>JP</button>
                </div>
                <div className="active-filters">
                    
                </div>
                <div className="recipe-grid"></div>
            </section>
        </div>
    )
}

export default Category;