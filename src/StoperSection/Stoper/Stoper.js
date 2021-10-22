import { useState } from "react";

export function Stoper({ element, index, stoperArray, setStoperArray }) {

    const [timeLeft, setTimeLeft] = useState("");

    setTimeout(changeTime, 1000)

    function changeTime() {
        let currentDate = new Date;

        element[3] = element[3].toString();
        element[2] = element[2].toString();

        if (element[3].length < 2) {
            element[3] = "0" + element[3];
        }

        if (element[2].length < 2) {
            element[2] = "0" + element[2];
        }

        let stoperDate = element[2] + " " +
            element[3] + " " + element[1] + " " + 
            element[4] + ":00" + " GMT+0200";

        let time = (Date.parse(stoperDate) - Date.parse(currentDate));

        if (time <= 0) {
            deleteTask(index)
        }

        console.log(time/1000);

        let years = Math.floor(time / 31536000000);
        let months = Math.floor(time % 31536000000 / (2629746000));
        let days = Math.floor(time % 2629746000 / (86400000));
        let hour = Math.floor(time%86400000 / (3600000));
        let minutes = Math.floor(time%3600000 / (60000));
        let seconds = 60 - currentDate.getSeconds();

        setTimeLeft(
            " " + years + " | " + months + " | " + days + " | " +
            hour + ":" + minutes + ":" + seconds
        );
    }

    function deleteTask(stoperID) {
        for (let i = 0; i <= 1000; i++) {
            clearTimeout(i);
        }
        let newStoperArray = stoperArray;
        newStoperArray.splice([stoperID.index], 1);
        setStoperArray([...newStoperArray]);
    }

    return (
        <article key={index} className="Stoper-Article">
            <p> Name: {element[0]} </p>
            <p> Data: {element[1]} | {element[2]} | {element[3]} | {element[4]} </p>
            <p> Time left:
                {timeLeft}
            </p>
            <button onClick={() => deleteTask({ index })}>Delete Stoper</button>
        </article>
    )
}