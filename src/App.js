import { useState } from 'react'

import './App.css';

import { BLOG_DATA } from './data/blogsData'

import Navbar from './components/Navbar';
import Main from './components/Main';
import Contacts from './components/Contacts';

function App() {
  
  const [blogs, setBlogs] = useState(BLOG_DATA)
  
  return (
    <>
      <div className="App">
        <Navbar />
        <Main blogs={blogs}/>
        <Contacts />
      </div>
    </>
  );
}

export default App;
