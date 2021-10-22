import { useEffect, useState } from "react";
import "./formSection.scss";

export function FormSection({ stoperArray, setStoperArray, user }) {

    const [newName, setNewName] = useState("task")
    const [newTime, setNewTime] = useState(undefined)
    const [newYear, setNewYear] = useState(undefined)
    const [newMonth, setNewMonth] = useState(undefined)
    const [newDay, setNewDay] = useState(undefined)

    function validateName(element) {
        setNewName(element.target.value);
    }

    function validateTime(element) {
        setNewTime(element.target.value);
    }

    function validateYear(element) {
        setNewYear(element.target.value);
    }


    function validateMonth(element) {
        setNewMonth(element.target.value);
    }


    function validateDay(element) {
        setNewDay(element.target.value);
    }


    function createNewStoper(element) {
        element.preventDefault();

        let newStoper = [...stoperArray, [newName, newYear, newMonth, newDay, newTime]]
        setStoperArray(newStoper);
    }

    function clearInputs(element) {
        element.preventDefault();

        setNewName("");
        setNewTime("");
        setNewYear("");
        setNewMonth("");
        setNewDay("");
    }

    console.log(stoperArray);

    return (
        <aside className="Form-Section">

            <h1>Create <span>new</span> stoper</h1>

            <form>

                <input
                    type="text"
                    name="taskName"
                    placeholder="task"
                    onChange={validateName}
                    value={newName}
                />

                <div>
                    <input
                        type="number"
                        name="year"
                        max="2100"
                        min="2021"
                        placeholder="year"
                        onChange={validateYear}
                        value={newYear}
                    />

                    <input
                        type="number"
                        name="month"
                        max="12"
                        min="1"
                        placeholder="month"
                        onChange={validateMonth}
                        value={newMonth}
                    />

                    <input
                        type="number"
                        name="day"
                        max="31"
                        min="1"
                        placeholder="day"
                        onChange={validateDay}
                        value={newDay}
                    />
                </div>

                <input
                    type="time"
                    name="time"
                    onChange={validateTime}
                    value={newTime}
                />

                <div className="buttons">
                    <button onClick={createNewStoper}>
                        Create
                    </button>

                    <button onClick={clearInputs}>
                        Clear
                    </button>
                </div>
            </form>
        </aside>
    )
}