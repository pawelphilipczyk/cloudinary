import { Link, LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

import { getImages } from "../api";
import { SearchForm } from "../components/SearchForm";
import { DataSchema } from "../types";

const Main = styled.div`
  display: flex;
  gap: 20px;
  background: #202020;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  min-width: 25%;
  height: 100%;
  padding: 1em;

  @media screen and (max-width: 768px) {
    width: initial;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  text-decoration: inherit;

  &:hover {
    color: ${({ theme }) => theme.color.primaryAlt};
  }
`;

export async function loader({ request }: LoaderFunctionArgs) {
  const q = new URL(request.url).searchParams.get("q") || undefined;
  return { images: await getImages(q), q };
}

export const useImagesData = (count = 10) => {
  const data = useRouteLoaderData("images");
  const { images, q } = DataSchema.parse(data);
  return { images: images.slice(0, count), q };
};

export default function Images({ children }: React.PropsWithChildren) {
  const { images, q = "" } = useImagesData();

  return (
    <Main>
      <Sidebar>
        <h1>Cloudinary</h1>
        <SearchForm q={q} />
        <nav>
          <ul>
            {images.map((image) => (
              <li key={image.id}>
                <NavLink to={`/images/${image.id}`} key={image.id}>
                  {image.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Sidebar>
      {children}
    </Main>
  );
}
