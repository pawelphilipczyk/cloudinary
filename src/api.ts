import { Image } from "./types";

export async function getImages(): Promise<Image[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return data;
}

export async function getImage(id: string): Promise<Image> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();
  return data;
}
