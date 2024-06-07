import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getImage } from "../api";
import { ImageSchema } from "../types";
import "./images-details.css";

export async function loader({ params }: LoaderFunctionArgs) {
  return params.imageId ? await getImage(params.imageId) : null;
}

export const useImageData = () => {
  const data = useLoaderData();
  return ImageSchema.parse(data);
};

const ImageDetails = () => {
  const image = useImageData();

  return (
    <section>
      <Link to="/images">Back</Link>
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <p>ID: {image.id}</p>
    </section>
  );
};
export default ImageDetails;
