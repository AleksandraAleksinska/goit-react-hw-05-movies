import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

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
    <Fragment>
      <ul>
      {reviewById.length > 0 ? reviewById.map((review) => {
      return <li key={review.id}>
        <p>Author: {review.author}</p>
        <p> {review.content}</p>
        </li>}): <p>'We don't have any reviews for this movie'</p>}
      </ul>
    </Fragment>
  )
}


export default Reviews