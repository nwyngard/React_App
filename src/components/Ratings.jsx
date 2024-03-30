// Ratings.jsx - fetches and displays ratings data from the server API.
import { useQuery } from "react-query";
import axios from "axios";

import Rating from '../components/Rating';
import Row from 'react-bootstrap/Row';

const Ratings = () => {
    

    // fetchRatings function fetches feedback data from the server API.
    const fetchRatings = async () => {
        const response = await axios(`http://localhost:4000/api`);
        return response.data;
    };

    /* useQuery hook to fetch ratings data from the server API.
    The 'ratings' key is used to identify this specific query in the cache.
    The fetchRatings function is called to fetch the data.*/
    const { isLoading, isError, data } = useQuery('ratings', fetchRatings);

    // Render loading when data is being fetched
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Render error if data fetching fails
    if (isError) {
        return <p>Error: {isError.message}</p>;
    }
    
    // Render ratings data
    return ( 
        <Row className="mt-3">
            {/*Map through the ratings data array and render a Rating component for each item.
            The 'rating' prop is assigned the current rating object from the data array, passing it as a parameter to the Rating component.*/}
            {data.map((rating, index) => (
                <Rating key={index} rating={rating} />
            ))}
        </Row>
     );
}
 
export default Ratings;

