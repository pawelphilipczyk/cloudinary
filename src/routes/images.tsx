import { Link, useLoaderData } from "react-router-dom";
import { z } from "zod";
import "./images.css";

const ImageSchema = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

const DataSchema = z.object({
  images: z.array(ImageSchema),
});

type Image = z.infer<typeof ImageSchema>;

async function getImages(): Promise<Image[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return data;
}

export async function loader() {
  const images = await getImages();
  return { images };
}

export default function Images() {
  const data = useLoaderData();

  const { images } = DataSchema.parse(data);

  return (
    <div id="images">
      <div id="sidebar">
        <h1>Cloudinary</h1>
        <div>
          <form id="search-form" role="search" method="post">
            <input
              id="q"
              aria-label="Search images"
              placeholder="Search images"
              type="search"
              name="q"
            />
            <button type="submit">🔍</button>
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            {images.slice(0, 10).map((image) => (
              <li>
                <Link to={`/images/${image.id}`} key={image.id}>
                  {image.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <ul>
          {images.slice(0, 10).map((image) => (
            <li className="card">
              <Link to={`/images/${image.id}`} key={image.id}>
                <img src={image.thumbnailUrl} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
