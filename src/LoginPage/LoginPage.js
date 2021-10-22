import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./loginPage.scss";

export function LoginPage() {

    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyAh-25ZP7QHPNBmz6V90xjtm2EqENpk5RQ",
        authDomain: "yourtime-9bd92.firebaseapp.com",
        projectId: "yourtime-9bd92",
        storageBucket: "yourtime-9bd92.appspot.com",
        messagingSenderId: "441798797628",
        appId: "1:441798797628:web:6a8436a58ec8f0b7a15639"
    };

    const app = initializeApp(firebaseConfig);

    function emailValidation(element) {
        SetEmail(element.target.value);
    }

    function passValidation(element) {
        SetPass(element.target.value);
    }

    function login(element) {
        element.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                let history = useHistory()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }


    return (
        <section className="Login-Page">
            <div className="Login-Div">
                <h1>Your<span>Time</span></h1>
                <form>
                    <input type="email" placeholder="email" onChange={emailValidation} value={email} />
                    <input type="text" placeholder="password" onChange={passValidation} value={pass} />
                    <input type="submit" className="loginButton" value="login" onClick={login} />
                </form>
            </div>

            <div className="Login-To-Register">
                Do not have an account?
                <Link to="/register">Register here</Link>
            </div>
        </section>
    )

}