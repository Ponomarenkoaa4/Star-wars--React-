import React, { useState } from "react";
import ErrorMessage from "@components/ErrorMessage";

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};

export default withErrorApi;
