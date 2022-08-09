const BlogCard = (props) => {
  return(
    <section className="blogcard">
      <div className="blogcard-tn-container">
        <img className="blogcard-thumbnail" src={props.img} alt={props.img_alt}/>
      </div>
      <div className="blogcard-desc-container">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <span>Read More</span>
      </div>
    </section>
    )
}

export default BlogCard;