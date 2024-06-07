import {
  Form,
  Link,
  LoaderFunctionArgs,
  useRouteLoaderData,
} from "react-router-dom";
import { getImages } from "../api";
import { DataSchema } from "../types";
import "./images.css";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
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
  const { images, q = '' } = useImagesData();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = q;
  }, [q]);

  return (
    <div id="images">
      <div id="sidebar">
        <h1>Cloudinary</h1>
        <div>
          <Form id="search-form" role="search" method="get">
            <input
              id="q"
              aria-label="Search images"
              placeholder="Search images"
              type="search"
              name="q"
              defaultValue={q}
              ref={inputRef}
            />
            <button type="submit">🔍</button>
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
        </div>
        <nav>
          <ul>
            {images.map((image) => (
              <li key={image.id}>
                <Link to={`/images/${image.id}`} key={image.id}>
                  {image.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">{children}</div>
    </div>
  );
}
