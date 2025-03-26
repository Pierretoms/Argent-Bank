import React from 'react'
import "./Button.scss"

function Button({edit, className}) {
  return (
    <button className={className}>{edit}</button>
  )
}

export default Button