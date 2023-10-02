import { ImageListItem, ImageListItemBar } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieItem(props) {
  const history = useHistory();

  // click listener on image that sends to details/id
  const imageClicked = () => {
    history.push(`/details/${props.id}`);
  };

  return (
    <ImageListItem>
      <img
        srcSet={`${props.poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${props.poster}?w=248&fit=crop&auto=format`}
        alt={props.title}
        loading="lazy"
        onClick={imageClicked}
      />
      <ImageListItemBar title={props.title} />
    </ImageListItem>
  );
}
