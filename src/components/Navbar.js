import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <h1>WEBDEV WHISNANT</h1>
        <h1 className="blog">BLOG</h1>
      </div>
        <button className="nav-goback-btn">
          <Link to="/" className="nav-link">
            <h2>Back</h2>
          </Link>
        </button>
    </nav>
  );
}

export default Navbar;