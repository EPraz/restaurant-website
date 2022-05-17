import React from 'react'
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='app__errorPage flex__center section__padding app__bg'>
        <h1 className='headtext__cormorant' style={{display: 'block'}}>OOOPS</h1>
        <p className='headtext__cormorant'>404</p>
        <p className='headtext__cormorant'>Page Not Found</p>
    </div>
  )
}

export default ErrorPage