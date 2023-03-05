import React from 'react'
import "../sass/scss/conclusion.scss";

import conclusion from '../assets/img/conclusion.jpg';

function Conclusion() {
  return (
    <div className='conclusion'>
        <div className='textBoxConclusion1'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.</p>
            <div><img className='imgConclusion' src={conclusion} alt="test2"/></div>
        </div>
        </div>
  )
}

export default Conclusion