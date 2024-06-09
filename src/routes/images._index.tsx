import { Link } from "react-router-dom";
import styled from "styled-components";
import { useImagesData } from "./images";

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const GridItem = styled.li`
  list-style: none;
  padding: 1em;
  color: #888;
  border: 5px solid transparent;
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    border: 5px solid #202020;

    &:hover {
      border-color: #111111;
    }
  }
`;

export function loader() {
  return {};
}

const ImageIndex = () => {
  const { images } = useImagesData();
  return (
    <GridList>
      {images.map((image) => (
        <GridItem className="card" key={image.id}>
          <Link to={`/images/${image.id}`} key={image.id}>
            <img src={image.thumbnailUrl} />
          </Link>
        </GridItem>
      ))}
    </GridList>
  );
};
export default ImageIndex;
