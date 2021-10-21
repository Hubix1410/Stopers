import { useState } from "react";
import "./formSection.scss";

export function FormSection({stoperArray, setStoperArray}) {

    console.log(stoperArray);

    const currentDate = new Date();

    console.log(
        currentDate.getFullYear(),
        currentDate.getDate(), 
        currentDate.getMonth() + 1, 
        currentDate.getHours(),
        currentDate.getMinutes())

    const [newName, setNewName] = useState("task")
    const [newDate, setNewDate] = useState(undefined)
    const [newTime, setNewTime] = useState(undefined)

    function validateName(element) {
        setNewName(element.target.value);
        console.log(element.target.value);
    }

    function validateDate(element) {
        setNewDate(element.target.value);
        console.log(element.target.value);
        console.log(typeof(element.target.value));
    }

    function validateTime(element) {
        setNewTime(element.target.value);
        console.log(element.target.value);
        console.log(typeof(element.target.value));
    }

    function createNewStoper(element){
        element.preventDefault();

        let newStoper = [...stoperArray, [newName, newDate, newTime]]
        setStoperArray(newStoper);
    }



    return (
        <aside className="Form-Section">

            <h1>Create new stoper</h1>

            <form>

                <input
                    type="text"
                    name="taskName"
                    placeholder="task"
                    onChange={validateName}
                    value={newName}
                />

                <input
                    type="date"
                    name="date"
                    onChange={validateDate}
                    value={newDate}
                />

                <input
                    type="time"
                    name="time"
                    onChange={validateTime}
                    value={newTime}
                />

                <button onClick={createNewStoper}>
                    Create
                </button>

            </form>
            <button>Clear</button>
        </aside>
    )
}