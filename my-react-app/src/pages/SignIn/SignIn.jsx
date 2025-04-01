import React from 'react'
import Body from "../../containers/Body/Body"
import SignInContent from '../../containers/SignInContent/SignInContent'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';

function SignIn() {

  const navigate = useNavigate();

  const isLogged = useSelector(state => state.loginReducer.isLogged);

  useEffect(() => {
      isLogged && navigate('/user');
    }, [isLogged, navigate]);

  return (
    <Body>
      <main className='main bg-dark'>
        <SignInContent />
      </main>
    </Body>
  )
}

export default SignIn