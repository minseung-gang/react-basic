import React from "react";
import withLoading from "./withLoading";

function Input() {
  return <input defaultValue="Input" type="text" />;
}

export default withLoading(Input);
