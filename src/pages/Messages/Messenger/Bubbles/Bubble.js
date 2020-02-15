import React from "react";
import Publisher from "./Publisher";
import Consumer from "./Consumer";

export default function Bubble(props) {
  const { user, publisher, index } = props;
  if (user === publisher) {
    return <Publisher key={index} publisher={props.message} />;
  } else {
    return <Consumer key={index} consumer={props.message} />;
  }
}
