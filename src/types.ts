import { z } from "zod";

export const ImageSchema = z.object({
  albumId: z.number(),
  id: z.number(),

  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

export const DataSchema = z.object({
  images: z.array(ImageSchema),
});

export type Image = z.infer<typeof ImageSchema>;
