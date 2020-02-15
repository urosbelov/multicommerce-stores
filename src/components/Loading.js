import React from "react";
import { Spin, Icon } from "antd";

export default function Loading() {
  const icon = <Icon type="loading" style={{ fontSize: 46 }} spin />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Spin indicator={icon} />
    </div>
  );
}
