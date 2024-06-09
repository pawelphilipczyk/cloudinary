import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { getImage } from "../api";
import { ImageSchema } from "../types";

const Section = styled.section`
  flex-grow: 1;
  padding: 1em;
`;

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
    <Section>
      <Link to="/images">Back</Link>
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <p>ID: {image.id}</p>
    </Section>
  );
};
export default ImageDetails;
