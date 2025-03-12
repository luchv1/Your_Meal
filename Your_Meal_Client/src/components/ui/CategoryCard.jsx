import { Link } from "react-router-dom";
import mealCardImg from "/meal-card.jpg"


const CategoryCard = (props) => {
    return (
        <div className="category-card">
            <Link to={`meal/${props.mealId}`}>
                <div className="category-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="category-content">
                    <h2>{props.name}</h2>
                    <p>There cookies are the perfect, .....</p>
                </div>
                <div className="category-action">
                    <div className="category-action-list">
                        <ul>
                            <li>30 Min</li>
                            <li>Easy</li>
                            <li>4.5 Ratings</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard;