import React, { useContext } from 'react';
import './LogIn.css';
import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../../App';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import NavBar from '../../Home/Shared/NavBar/NavBar';


const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializeApp(firebaseConfig);
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
            }).catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });

    }
    return (
        <section className="login-container" style={{ textAlign: 'center' }}>
            <NavBar></NavBar>
            <div className="logIn-box">
                <h3 > Login with </h3>
                <p className="login-button">
                    <Button onClick={handleGoogleLogin} color="success" variant="outline-info"> <GoogleIcon/> Google</Button>
                </p>
            </div>

        </section>
    );
};

export default LogIn;