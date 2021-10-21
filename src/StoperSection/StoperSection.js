import "./stoperSection.scss";

export function StoperSection({stoperArray, setStoperArray}){

    setInterval( changeTimeLeft, 1000 );

    console.log(stoperArray);

    function deleteTask(stoperID){
        let newStoperArray = stoperArray;
        newStoperArray.splice([stoperID.index], 1);
        setStoperArray([...newStoperArray]);
    }

    function changeTimeLeft() {

        let currentDate = new Date();

        let newStoperArray = stoperArray.map((element) => {
            
            console.log(Date.parse(element[1]));
            console.log(Date.parse(currentDate));


        })

        //setStoperArray([...newStoperArray]);
    }

    let list = stoperArray.map((element, index) => 
        <article key={index} className="Stoper-Article">
            <p> Name: {element[0]} </p>
            <p> Data: {element[1]} | {element[2]} </p>
            <p> Time left: {element[3]} </p>
            <button onClick={() => deleteTask({index})}>Delete Stoper</button>
        </article>
    );
    
    return(
        <section className="Stoper-Section">
            {list}
        </section>
    )
}