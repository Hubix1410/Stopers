import { Stoper } from "./Stoper/Stoper";
import "./stoperSection.scss";

export function StoperSection({ stoperArray, setStoperArray }) {

    let list = stoperArray.map((element, index) =>
        <Stoper element={element} index={index} stoperArray={stoperArray} setStoperArray={setStoperArray} />
    );

    return (
        <section className="Stoper-Section">
        {list}
        </section>
    )
}