import { Cloudinary } from "@cloudinary/url-gen";
import { cloudName } from "./config";
import { Image } from "./types";

export async function getImages(title?: string): Promise<Image[]> {
  const searchParams = title ? new URLSearchParams({ title }) : "";
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?${searchParams}`
  );
  const data = await res.json();
  return data;
}

export async function getImage(id: string): Promise<Image> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();
  return data;
}
export const cld = new Cloudinary({ cloud: { cloudName } });