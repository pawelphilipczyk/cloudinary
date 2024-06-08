import { getImage } from "./api";
import { buildImage } from "./mocks/data/jsonplaceholder";
import { expect, it } from "./test-helpers";

it("should return image data", async () => {
  const data = await getImage('1');
  expect(data).toEqual([buildImage(1), buildImage(2)]);
});
