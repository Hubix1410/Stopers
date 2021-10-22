import { useState } from "react";

export function Stoper({ element, index, stoperArray, setStoperArray }) {

    const [timeLeft, setTimeLeft] = useState(0);
    let currentDate = new Date();
    let timeOut = setTimeout(changeTime, 1000)

    function deleteTask(stoperID) {
        for (let i = 0; i <= 1000; i++) {
            clearTimeout(i);
        }
        let newStoperArray = stoperArray;
        newStoperArray.splice([stoperID.index], 1);
        setStoperArray([...newStoperArray]);
    }

    function changeTime() {
        for (let i = 0; i <= 1000; i++) {
            clearTimeout(i);
        }
        setTimeLeft((Date.parse(stoperArray[index][1]) - Date.parse(currentDate)) / 1000);
        console.log(timeOut);
        clearTimeout(timeOut);
    }

    return (
        <article key={index} className="Stoper-Article">
            <p> Name: {element[0]} </p>
            <p> Data: {element[1]} | {element[2]} </p>
            <p> Time left:
                {timeLeft}
            </p>
            <button onClick={() => deleteTask({ index })}>Delete Stoper</button>
        </article>
    )
}