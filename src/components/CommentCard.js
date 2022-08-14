const CommentCard = (props) => {

  const { name, date, comment } = props.article;

  const timestamp = date;
  const humanReadableDateTime = new Date(timestamp).toLocaleString();

  return (
    <div className="commentcard-container">
      <div className="commentcard">
        <h3>{name}</h3>
        <h5>{humanReadableDateTime}</h5>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default CommentCard;