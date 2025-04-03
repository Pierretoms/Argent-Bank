import React from 'react'
import "./Header.scss"
import { Link } from 'react-router'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/signin.reducer";
import { getProfile } from '../../actions/user.action';

function Header() {

    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.loginReducer.isLogged);
    const token = useSelector((state) => state.loginReducer.token);
    const userName = useSelector((state) => state.userReducer.userName)


    const handleLogout = () => {
        dispatch(logout()); // Appeler l'action de déconnexion
    };

    useEffect(() => {
        // profil de l'utilisateur = token stockage local 
        try {
            (token && !userName) && dispatch(getProfile({ token }));
        } catch (error) {
            console.error(error);
            dispatch(logout());
            // erreur dans la récupération du profil --> token expiré ou invalide
            // Si c'est le cas on redirige vers la page de connexion et on force la déconnexion
        }
    }, [token, userName])

  return (
    <header>
        <nav className="main-nav">
            <Link to={'/'} className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isLogged && (
                    <Link to={'/user'} className="user-name">
                        {userName} <i className="fa fa-user-circle"></i>
                    </Link>
                )}
                <Link to={'/signIn'} className='main-nav-item' onClick={handleLogout}>
                    { isLogged 
                        ? (<><i className="fa fa-sign-out"></i>Sign Out</>) 
                        : (<><i className="fa fa-user-circle"></i>Sign In</>) 
                    }
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header