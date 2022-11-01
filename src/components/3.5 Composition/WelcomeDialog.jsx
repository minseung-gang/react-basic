import React from "react";
import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

export default function WelcomeDialog() {
  /* return (
    <Dialog>
      <h1>Welcome!</h1>
      <h4>Thank you!</h4>
    </Dialog>
  ); */
  return <CustomDialog title={"welcome"} description={"Thank you"} />;
}
