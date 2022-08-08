import happyBoss from '../images/happyboss-blockimage.jpg'

const BlogCard = () => {
  return(
    <section className="blogcard">
      <div className="blogcard-tn-container">
        <img className="blogcard-thumbnail" src={happyBoss} alt="happy boss"/>
      </div>
      <div className="blogcard-desc-container">
        <h2>How to Make Your Boss, and You, Happy!</h2>
        <p>It's important that both you and your boss are happy. There are many, many reasons for this, however, here's a small list: good relations create non-toxic workplaces, if you make your boss happy you're more likely to get paid well, and it makes work easier.</p>
        <span>Read More</span>
      </div>
    </section>
    )
}

export default BlogCard;