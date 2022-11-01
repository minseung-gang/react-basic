import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialo() {
  return (
    <Dialog
      title={"반갑습니다."}
      description={"만나뵙게 되서 영광이에요!"}
      button={<button style={{ color: "red" }}>닫기</button>}
    />
  );
}
