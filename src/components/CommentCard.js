import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const CommentCard = (props) => {

  const { name, date, comment } = props.article;
  const [countOfLikes, setCountOfLikes] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const timestamp = date;
  const humanReadableDateTime = new Date(timestamp).toLocaleString();
 
  const handleClick = () => {
    if(countOfLikes === 0) {
      setCountOfLikes(countOfLikes => countOfLikes + 1)
    }
    // I can't get this to work and have tried a few
    setIsClicked(!isClicked)
  }

  return (
    <div className="commentcard-container">
      <div className="commentcard">
        <h3>{name}</h3>
        <h5>{humanReadableDateTime}</h5>
        <p>{comment}</p>
        <div className="commentcard-likescount">
          <div className="commentcard-likescount-offset">
          <button 
            className="commentcard-thumbsup-btn"
            onClick={handleClick}
          >
            <FontAwesomeIcon 
              className={`commentcard-icon ${isClicked}`}
              icon={faThumbsUp} 
            />
          </button>
          </div>
          <span>{countOfLikes}</span>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;