const BlogArticle = (props) => {

  return(
    <div className="blogarticle-container">
    <main className="blogarticle-main">
      <div className="blogarticle-title">
        <h1>{props.blogArticle?.title}</h1>
        <img
          className="blogarticle-image"
          src={props.blogArticle.img} 
          alt={props.blogArticle.img_alt} 
        />
      </div>
      <article className="blogarticle-article">
        
        <h1>{props.blogArticle?.title}</h1>
        <p className="blogarticle-date">{props.blogArticle?.date}</p>
        {
          props.blogArticle?.desc.split("\n").map((paragraph) => (
            <p>{paragraph}</p>
          ))
        }
      </article>
    </main>
    </div>
    )
}

export default BlogArticle;