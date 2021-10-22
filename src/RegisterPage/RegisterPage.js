import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./registerPage.scss"

export function RegisterPage({ stoperArray, setStoperArray, user, setUser }) {

    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");
    const [passRepeat, SetPassRepeat] = useState("");

    let history = useHistory();

    const firebaseConfig = {
        apiKey: "AIzaSyAh-25ZP7QHPNBmz6V90xjtm2EqENpk5RQ",
        authDomain: "yourtime-9bd92.firebaseapp.com",
        projectId: "yourtime-9bd92",
        storageBucket: "yourtime-9bd92.appspot.com",
        messagingSenderId: "441798797628",
        appId: "1:441798797628:web:6a8436a58ec8f0b7a15639"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    function emailValidation(element) {
        SetEmail(element.target.value);
    }

    function passValidation(element) {
        SetPass(element.target.value);
    }

    function passRepeatValidation(element) {
        SetPassRepeat(element.target.value);
    }

    function register(element) {

        element.preventDefault();

        if (pass !== passRepeat) {
            alert("Passwords don't match")
            return false;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user1 = userCredential.user;

                setUser(userCredential.user);

                history.push("/main");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <section className="Register-Page">
            <div className="Register-Div">
                <h1>Your<span>Time</span></h1>
                <form>
                    <input type="email" value={email} onChange={emailValidation} placeholder="email" />
                    <input type="password" value={pass} onChange={passValidation} placeholder="password" />
                    <input type="password" value={passRepeat} onChange={passRepeatValidation} placeholder="password" />
                    <input type="submit" onClick={register} className="registerButton" value="Register" />
                </form>
            </div>

            <div className="Register-To-Login">
                Do you have an account?
                <Link to="/login">Login here</Link>
            </div>
        </section>
    )
}