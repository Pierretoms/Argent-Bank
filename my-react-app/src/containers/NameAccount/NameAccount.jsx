import React from 'react'
import "./NameAccount.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../actions/user.action";

function NameAccount() {

  const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector(state => state.loginReducer.isLogged);
    const firstName = useSelector(state => state.userReducer.firstName)
    const lastName = useSelector(state => state.userReducer.lastName)
    const userName = useSelector(state => state.userReducer.userName)
    const token = useSelector((state) => state.loginReducer.token);
    const [newUserName, setNewUserName] = useState(userName)

    function handleSubmit(event) {
        event.preventDefault();
        try {
            dispatch(updateProfile({ token, userName: newUserName }));
            hide("edit");
          } catch (error) {
            console.error(error.message);
          }
          return false;
    }

    function hide(name){
        const WelcomeContainer = document.getElementById("headerWelcome")
        const editContainer = document.getElementById("edit-container")
        if(name === "edit"){
            editContainer.style.display="none"
            WelcomeContainer.style.display="inline"

        }else{
            editContainer.style.display="flex"
            editContainer.style.justifyContent="center"
            editContainer.style.padding="0 2rem 2rem"
            WelcomeContainer.style.display="none"
        }
    }

    function undo(){
        hide("edit")
    }

    useEffect(() => {
        !isLogged && navigate("/signin");
    }, [isLogged, navigate]);

  return (
    <>
      <div className="header">
        <div id="headerWelcome">
          <h1>Welcome back<br />{userName} !</h1>
          <button className="edit-button" onClick={() => hide("welcome")}>Edit Name</button>
        </div>
      </div>
      <form id="edit-container" onSubmit={handleSubmit}>
        <div className="header-edit" id="headerEdit">
          <h1>Edit user info</h1>
          <div id="header-inputs">
            <label htmlFor="username"> Username
              <input type="text" id="username" value={newUserName ?? ""} onChange={event => setNewUserName(event.target.value)} required />
            </label>
            <label htmlFor="firstName"> First name
              <input type="text" id="firstName" value={firstName ?? ""} readOnly /> 
            </label>
            <label htmlFor="lastName"> Last name
              <input type="text" id="lastName" value={lastName ?? ""} readOnly />
            </label>
          </div>
          <div className="header-edit-buttons">
            <button type="submit">Save</button>
            <button onClick={() => undo()}>Cancel</button>
          </div>
        </div>
      </form>
      </>
  )
}

export default NameAccount