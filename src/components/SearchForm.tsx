import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ReactRouterForm, Input } from "./Form";

export const SearchForm = ({ q }: { q: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = q;
  }, [q]);

  return (
    <ReactRouterForm id="search-form" role="search" method="get">
      <Input
        id="q"
        aria-label="Search images"
        placeholder="Search images"
        type="search"
        name="q"
        defaultValue={q}
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value === "" && inputRef.current) navigate("");
        }}
      />
      <Button type="submit">🔍</Button>
      <div id="search-spinner" aria-hidden hidden={true} />
      <div className="sr-only" aria-live="polite"></div>
    </ReactRouterForm>
  );
};
