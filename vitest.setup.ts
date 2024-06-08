import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./src/mocks/node.js";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
