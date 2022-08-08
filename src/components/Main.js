import BlogCard from './BlogCard';

const Main = () => {
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
        <BlogCard />
      </div>
    </main>
    )
}

export default Main;