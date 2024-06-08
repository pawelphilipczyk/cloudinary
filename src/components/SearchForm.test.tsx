import { expect, it, screen, renderWithRouter } from "../test-helpers";
import { SearchForm } from "./SearchForm";

it("should render a search form", () => {
  renderWithRouter(<SearchForm q="cats" />);
  expect(screen.getByRole("searchbox")).toHaveValue("cats");
});
