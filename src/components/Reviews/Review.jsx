import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import css from './Review.module.css';
import { getReviews } from 'services/tmdbAPI';

const Review = ({reviewById}) => {
  return (
    <Fragment>
        {reviewById.length > 0 ? reviewById.map((review) => 
         <li className={css.reviewListItem} key={review.id}>
          <p className={css.reviewAuthor}>Author: {review.author}</p>
          <p> {review.content}</p>
          </li>): <p>We don't have any reviews for this movie</p>}
    </Fragment>
  )
}

export default Review

Review.propTypes ={
  reviewById: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
  
}