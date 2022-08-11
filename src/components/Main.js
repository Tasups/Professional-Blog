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
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {
          props.blogs?.map((blog) => (
            <BlogCard 
              key={blog.title}
              id={blog.id}
              title={blog.title}
              desc={blog.desc}
              img={blog.img}
              alt={blog.img_alt}
              handleClick={props.handleClick}
            />
          ))
        }
      </div>
    </main>
    )
}

export default Main;