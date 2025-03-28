import React from 'react'
import "./From.scss"
import { Link } from 'react-router'

function Form() {
  return (
    <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/*<!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
          <Link to={'/user'} className="sign-in-button">Sign In</Link>
          {/*<!-- SHOULD BE THE BUTTON BELOW -->*/}
          {/*<!-- <button className="sign-in-button">Sign In</button> -->*/}
          {/*<!--  -->*/}
        </form>
  )
}

export default Form