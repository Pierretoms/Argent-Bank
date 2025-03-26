import React from 'react'
import Body from "../../containers/Body/Body"
import SignInContent from '../../containers/SignInContent/SignInContent'

function SignIn() {
  return (
    <Body>
      <main className='main bg-dark'>
        <SignInContent />
      </main>
    </Body>
  )
}

export default SignIn