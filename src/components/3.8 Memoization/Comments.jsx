import React, { useCallback } from "react";
import CommentItem from "./CommentItem";
export default function Comments({ commentList }) {
  
  const handleChange = useCallback(() => console.log("눌림"), []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px 0",
        padding: "10px 0",
        flexDirection: "column",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}
