import { useState } from "react";
import PostLiked from "./PostLiked";

export default function ReactPost(props) {
  const [isLiked, setIsLIked] = useState(false)
  const [showAnswers, setShowAnswers] = useState(true)

  return (
    <>
    <div className="post">
      <div className="like-and-question">
        <div className="like-area">
          {isLiked ? <PostLiked /> :
          <button className="like-post like-button fa fa-heart" onClick={_ => setIsLIked(true)} title="Like the post"></button>}
        </div>
        
        <p className="questions">{props.q.question}</p>
      </div>
      
      <div className="answers">
        {showAnswers && props.q.answer.map((ans, i) => <p className="answer" key={i}>{ans}</p>)}
        
        <button title={!showAnswers ? 'show answers' : 'hide answers'} className={showAnswers ? 'show-answers' : 'show-answers down'}
          onClick={_ => setShowAnswers(!showAnswers)}>&#9651;
        </button>
      </div>
    </div>
    </>
  )
}