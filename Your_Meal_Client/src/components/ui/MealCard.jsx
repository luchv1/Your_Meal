import { Link } from "react-router-dom";
import Button from "./Button";

const MealCard = (props) => {

    return (
        <div className="meal-card">
            <div className="meal-img">
                <img src={props.img} alt="" />
            </div>
            <div className="meal-content">
                <h2>{props.name}</h2>
                <p>There cookies are the perfect, .....</p>
            </div>
            <div className="meal-action">
                <Link to={`/meal/${props.mealId}`}>
                    <Button classes="primary-button">
                        See Full Details
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default MealCard;
