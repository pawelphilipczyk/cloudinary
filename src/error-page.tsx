import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  text-align: center;
`;

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <Page>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Page>
  );
}
