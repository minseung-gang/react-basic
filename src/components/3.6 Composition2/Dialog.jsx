import React from "react";
import { useState } from "react";

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Open
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: "5",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid black",
            padding: "24px",
            background: "white",
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.5",
            borderRadius: "3px",
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          {typeof props.description === "string" ? (
            <h4>{props.description}</h4>
          ) : (
            props.description
          )}
          {typeof props.button === "string" ? (
            <button
              style={{ background: "pink" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {props.button}
            </button>
          ) : (
            <div onClick={() => setIsOpen(!isOpen)}>{props.button}</div>
          )}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            background: "grey",
          }}
        ></div>
      )}
    </div>
  );
}
