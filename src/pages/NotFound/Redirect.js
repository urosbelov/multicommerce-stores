import React from "react";
import { Button } from "antd";
import history from "../../utils/history";

export default function Redirect({ isLogged, ...rest }) {
  function handleClick() {
    history.push(`${isLogged ? "/dashboard" : "/"}`);
  }

  return (
    <Button type="primary" onClick={handleClick}>
      {`${isLogged ? "Kontrolna tabla" : "Prijavite se"}`}
    </Button>
  );
}
