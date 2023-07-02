import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Review from './Review';



const Reviews = () => {

  const { movieId } = useParams();
  const [ reviewById, setReviewById ] = useState([]);
  

  useEffect(() => {

    const getReview= async() => {

      try {
        const key = 'dce0b8b37fbd78cdab3203c47fa0e91b';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`);
        const movieReview = response.data.results;
      
        setReviewById(movieReview)
      }
      catch(error) {
        console.log(error.message)
      }

    }
   getReview() 
  }, [movieId])

  return (
    
      <ul>
      <Review reviewById={reviewById}/>
      </ul>
    
  )
}


export default Reviews