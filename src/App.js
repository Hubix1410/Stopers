import { FormSection } from "./FormSection/FormSection";
import { StoperSection } from "./StoperSection/StoperSection";
import React, { useState } from 'react';
import "./app.scss";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
export function App() {

    const [stoperArray, setStoperArray] = useState([]);

    return (
        <main className="Main-Div">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/register">
                        <RegisterPage />
                    </Route>
                    <Route exact path="/main">
                        <FormSection stoperArray={stoperArray} setStoperArray={setStoperArray} />
                        <StoperSection stoperArray={stoperArray} setStoperArray={setStoperArray} />
                    </Route>
                </Switch>
            </BrowserRouter >
        </main >
    )
}