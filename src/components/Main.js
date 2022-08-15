import { useState } from 'react'

import BlogCard from './BlogCard';

const Main = (props) => {
  
  const [searchTerm, setSearchTerm] = useState("")
  
  const searchForBlog = (e) => {
    setSearchTerm(e.target.value)
  }
  
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
          onChange={searchForBlog}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        {
          props.blogs?.filter((val) => {
            if (searchTerm === ""){
              return val
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            } 
          })?.map((blog) => (
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