import React from 'react';
import "./SignInContent.scss"
import Form from '../Form/Form';

function SignInContent() {
  return (
    <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
    </section>
  );
}

export default SignInContent;
