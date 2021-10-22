import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./loginPage.scss";

export function LoginPage({ stoperArray, setStoperArray, user, setUser }) {

    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");

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

                const user1 = userCredential.user;

                const db = getFirestore();

                getDoc(doc(db, "stopers", user1.uid))
                .then((response)=>{
                    let response1 = response.data().stoper;
                    setStoperArray([...response1]);
                })

                setUser(userCredential.user);

                history.push("/main");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
            });
    }


    return (
        <section className="Login-Page">
            <div className="Login-Div">
                <h1>Your<span>Time</span></h1>
                <form>
                    <input type="email" placeholder="email" onChange={emailValidation} value={email} />
                    <input type="password" placeholder="password" onChange={passValidation} value={pass} />
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