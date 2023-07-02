import React, { Fragment } from 'react';
import css from './Review.module.css'

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