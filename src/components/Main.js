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
      </form>
      <div>
        {
          // eslint-disable-next-line
          props.blogs?.filter((val) => {
          // eslint-disable-next-line
            if (searchTerm === ""){
            // eslint-disable-next-line
              return val
              // eslint-disable-next-line
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            // eslint-disable-next-line
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