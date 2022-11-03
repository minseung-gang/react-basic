import React, { useEffect, useState } from "react";
import Comments from "./Comments";

let commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Memo() {

  const [comments, setComment] = useState(commentList);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setComment((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return <Comments commentList={comments} />;
}
