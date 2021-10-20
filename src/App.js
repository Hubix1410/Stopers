import { FormSection } from "./FormSection/FormSection";
import { StoperSection } from "./StoperSection/StoperSection";
import React, { useState } from 'react';
import "./app.scss";
export function App() {

    const [stoperArray, setStoperArray] = useState([]);

    return(
        <main className="Main-Div">
            <FormSection stoperArray={stoperArray} setStoperArray={setStoperArray}/>
            <StoperSection stoperArray={stoperArray} setStoperArray={setStoperArray}/>
        </main>
    )
}