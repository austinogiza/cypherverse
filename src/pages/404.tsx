import Error from "components/error/Error";

import React, { FC, useEffect } from "react";
import styled from "styled-components";

const ErrorPage: FC = () => {
  useEffect(() => {
    document.title = "Page Not Found - Cypherverse";
  }, []);
  return (
    <Body>
      <Error />
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default ErrorPage;
