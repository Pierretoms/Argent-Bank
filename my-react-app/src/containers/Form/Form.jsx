import React, { useState } from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/signin.action";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(({ loginReducer }) => loginReducer.error);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ email: username, password, remember }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={() => setRemember((prev) => !prev)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}

export default Form;
