import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieItem (props) {
    const history=useHistory();

    // click listener on image that sends to details/id
    const imageClicked = () => {
        history.push(`/details/${props.id}`)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.poster} alt={props.title} onClick={imageClicked}/>
        </div>
    );
}