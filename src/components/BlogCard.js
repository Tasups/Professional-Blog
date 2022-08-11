import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  
  const previewSelection = props.desc.split("\n")
  const previewBlurb = previewSelection[0]
  const previewSlice = `${previewBlurb.slice(0,400)}...`
  
  const selectArticle = (id) => {
    props.handleClick(id)
  }
  
  return(
    <section className="blogcard">
      <div className="blogcard-tn-container">
        <img className="blogcard-thumbnail" src={props.img} alt={props.img_alt}/>
      </div>
      <div className="blogcard-desc-container">
        <h2>{props.title}</h2>
        <p>{previewSlice}</p>
        <Link to="/blog" onClick={() => selectArticle(props.id)}>
          Read More
        </Link>
      </div>
    </section>
    )
}

export default BlogCard;

/*
{
  props.blogArticle?.desc.split("\n").map((paragraph) => (
    <p>{paragraph}</p>
  ))
}
*/