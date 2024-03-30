import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Recipe from './Recipe';
import { useQuery } from 'react-query';

const Recipes = () => {
    const fetchRecipes = async () => {
        // Fetch data from the API
        const apiKey = 'e62b0f63906c4b28b7f005b926b24b33';
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`);
        const data = await res.json();
        // Return the recipes from the data
        return data.recipes;
    };

    // Use React Query to fetch data
    const { isLoading, isError, data } = useQuery('recipes', fetchRecipes);

    // Render the component based on the fetched data
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {isError.message}</p>;
    }

    return (
        <div className="recipes-container">
            <h2>Popular Recipes</h2>
            <p>Not sure what to cook for dinner? Here are some popular ideas!</p>
            <Splide className="splide-container" options={{ perPage: 3, pagination: false, gap: "1rem" }}>
                {/* Map over the fetched recipes and render Recipe component for each */}
                {data.map((recipe, index) => (
                    <SplideSlide key={recipe.id}>
                        <Recipe key={index} recipe={recipe} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Recipes;


