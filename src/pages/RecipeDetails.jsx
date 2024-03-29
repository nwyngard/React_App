/*
**Recipe Details Page**
Fetches and displays recipe details based on the recipe the user clicks on in the home page
The 'name' parameter is extracted from the URL and then used to fetch the relevant recipe from the spoonacular API
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    // Store URL parameters from the current route
    let params = useParams();
    const [details, setDetails] = useState({});

    //Fetch recipe details from the API using the 'name' parameter from the URL
    const fetchDetails = async () => {
        const apiKey = "e62b0f63906c4b28b7f005b926b24b33";
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    }

    // Fetch recipe details when the 'name' parameter in the URL changes
    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    
    return ( 
        <div className="recipe-details">
            <h2>{details.title}</h2>
            <div className="content-wrapper">
                <img src={details.image} alt={details.title}/>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>
        </div>
     );
}

export default RecipeDetails;
