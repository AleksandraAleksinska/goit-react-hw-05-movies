import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Review from './Review';
import { getReviews } from 'services/tmdbAPI';



const Reviews = () => {

  const { movieId } = useParams();
  const [ reviewById, setReviewById ] = useState([]);
  
  
  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviewById(reviews);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    
      <ul>
      <Review reviewById={reviewById}/>
      </ul>
    
  )
}


export default Reviews