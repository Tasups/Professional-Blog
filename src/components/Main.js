import BlogCard from './BlogCard';

const Main = (props) => {
  return(
    <main className="main">
      <form>
        <label htmlFor="blogs" hidden="hidden">Search Blogs</label>
        <input
          type="search" 
          id="blogs" 
          name="blogs" 
          placeholder="Search Blogs" 
          required
        />
      </form>
      <div>
        {
          props.blogs?.map((blog) => (
            <BlogCard 
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              alt={blog.img_alt}
            />
          ))
        }
      </div>
    </main>
    )
}

export default Main;