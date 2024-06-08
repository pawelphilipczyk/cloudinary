import { http, HttpResponse } from "msw";
import { buildImage } from "./data/jsonplaceholder";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://jsonplaceholder.typicode.com/photos*", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([buildImage(1), buildImage(2)]);
  }),
];
