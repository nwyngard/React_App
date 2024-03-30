const Rating = ({ rating }) => {
    return ( 
        <div className="rating-card">
             <h5>{rating.name}</h5>
             <h6>App Rating: {rating.appRating}</h6>
             <h6>Feedback: </h6>
             <p>"{rating.feedback}"</p>
        </div>
     );
}
 
export default Rating;