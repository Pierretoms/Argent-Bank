import React from 'react'
import "./Features.scss"
import FeatureItem from '../../components/FeatureItem/FeatureItem'

function Features() {
  return (
    <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem 
            pictogramme='/icon-chat.webp' 
            title='You are our #1 priority' 
            texte='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' 
        />
        <FeatureItem 
            pictogramme='/icon-money.webp' 
            title='More savings means higher rates' 
            texte='The more you save with us, the higher your interest rate will be!' 
        />
        <FeatureItem 
            pictogramme='/icon-security.webp' 
            title='Security you can trust' 
            texte='We use top of the line encryption to make sure your data and money is always safe.' 
        />
    </section>
  )
}

export default Features