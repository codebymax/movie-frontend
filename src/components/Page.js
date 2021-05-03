import React from 'react'
import Welcome from './Welcome'
import MovieView from './MovieView'

const Page = (props) => {
  if (props.cur === 'home') {
    return <Welcome />
  } else {
    return <MovieView cur={props.cur} movies={props.movies} page={props.page} setPage={props.setPage} update={props.update} />
  } 
}

export default Page
