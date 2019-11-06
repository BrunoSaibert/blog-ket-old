import React from "react";

import Intro from "../components/Intro";

function Error({ statusCode }) {
  return (
    <Intro
      title={
        statusCode
          ? `O erro ${statusCode} ocorreu no servidor`
          : "O erro ocorreu no cliente"
      }
    />
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
