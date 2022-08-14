import CommentCard from "./CommentCard"

const CommentField = (props) => {

  console.log(props.blogArticle)

  return (
    <div>
      {
        props.blogArticle.comments?.map((article) => {
          return <CommentCard key={article.id} article={article} />
        })
      }
    </div>
  );
}

export default CommentField