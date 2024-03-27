import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
    return ( 
        <div className="card">
            <Link to={`/recipedetails/${recipe.id}`}>
                <div className="title-container">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.sourceUrl}</p>
                </div>
                <img src={recipe.image} alt={recipe.title} />
            </Link>
        </div>
     );
}
 
export default Recipe;
