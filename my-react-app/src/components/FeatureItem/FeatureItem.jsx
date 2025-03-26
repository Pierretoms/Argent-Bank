import React from 'react'
import "./FeatureItem.scss"

function FeatureItem({ pictogramme, title, texte }) {
  return (
    <div className="feature-item">
      <img src={pictogramme} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{texte}</p>
    </div>
  )
}

export default FeatureItem