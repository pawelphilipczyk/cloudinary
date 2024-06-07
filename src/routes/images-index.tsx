import { Link } from "react-router-dom";
import { useImagesData } from "./images";

export function loader() {
  return {};
}

const ImageIndex = () => {
  const images = useImagesData();
  return (
    <ul>
      {images.map((image) => (
        <li className="card" key={image.id}>
          <Link to={`/images/${image.id}`} key={image.id}>
            <img src={image.thumbnailUrl} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ImageIndex;
