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
        <p>{props.blogArticle?.desc}</p>
      </article>
    </main>
    </div>
    )
}

export default BlogArticle;