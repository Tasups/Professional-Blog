//need to add submit function to the form element

const CommentForm = () => {
  return(
    <section className="commentform-container">
      <form className="commentform-form">
        <div className="commentform-input-els">
          <label htmlFor="comment">Comment</label>
          <textarea 
            type="text" 
            id="comment" 
            name="comment" 
            placeholder="Leave a comment here" 
            required
          >
          </textarea>
        </div>
        <div className="commentform-input-els">
        <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter name" 
            required
          >
          </input>
        </div>
        <div className="commentform-input-els">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter email" 
            required
          >
          </input>
          <button type="submit">Post Comment</button>
        </div>
      </form>
    </section>
    )
}

export default CommentForm;