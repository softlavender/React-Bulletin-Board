import { useState } from "react";
import PostLiked from "./PostLiked";

export default function ReactPost(props) {
  const [isLiked, setIsLIked] = useState(false)

  return (
    <>
    <div className="post">
      <p>{props.q.question}</p>
      <p>{props.q.answer}</p>
      {isLiked ? <PostLiked /> : <button className="like" onClick={_ => setIsLIked(true)}>like</button>}
    </div>
    </>
  )
}