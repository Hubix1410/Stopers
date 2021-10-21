import "./stoperSection.scss";

export function StoperSection({stoperArray, setStoperArray}){
    
    function deleteTask(stoperID){
        let newStoperArray = stoperArray;
        newStoperArray.splice([stoperID.index], 1);
        setStoperArray([...newStoperArray]);
    }

    let list = stoperArray.map((element, index) => 
        <article key={index} className="Stoper-Article">
            <p> Name: {element[0]} </p>
            <p> Data: {element[1]} </p>
            <p> Time left: {element[2]} </p>
            <button onClick={() => deleteTask({index})}>Delete Stoper</button>
        </article>
    );
    
    return(
        <section className="Stoper-Section">
            {list}
        </section>
    )
}