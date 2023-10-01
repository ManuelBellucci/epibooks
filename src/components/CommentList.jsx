import React from 'react'
import SingleComment from './SingleComment'

const CommentList = ({ comments }) => {
  return (
    <div>
      {/* Mappa ogni commento nella lista utilizzando il componente SingleComment */}
      {comments.map((comment, index) => (
        <SingleComment
          key={index}
          comment={comment}
        />
      ))}
    </div>
  )
}

export default CommentList
