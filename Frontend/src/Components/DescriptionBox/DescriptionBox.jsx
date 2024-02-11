import React from 'react'
import './DescruptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>This is a new site with a new brand "Werka Design". </p>
        </div>
    </div>
  )
}

export default DescriptionBox