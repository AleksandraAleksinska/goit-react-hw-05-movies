import React, { Fragment, useState } from 'react'

const Movies = () => {

    const [ query, setQuery ] = useState('');
    

  return (
    <Fragment>
        <form>
            <input></input>
            <button type='submit'>Search</button>
        </form>
    </Fragment>
  )
}

export default Movies