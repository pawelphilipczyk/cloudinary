import { useEffect, useRef } from "react";
import {
    Form,
    useNavigate
} from "react-router-dom";
  
export const SearchForm = ({ q }: { q: string }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (inputRef.current) inputRef.current.value = q;
    }, [q]);
  
    return (
      <Form id="search-form" role="search" method="get">
        <input
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
        <button type="submit">🔍</button>
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
    );
  }