import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Home from './Home.js'
import BlogArticle from './components/BlogArticle.js'

import { BLOG_DATA } from './data/blogsData'

function App() {
  
  const [blogs, setBlogs] = useState()
  const [blogArticle, setBlogArticle] = useState()
  
  useEffect(() => {
    setBlogs(BLOG_DATA)
  }, [blogs])
  
  const blogArticleSelection = (id) => {
    const selectedArticle = blogs.filter(blog => blog.id === id)
    console.log(selectedArticle[0])
    setBlogArticle(selectedArticle[0])
    console.log(blogArticle)
  }
  
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home blogs={blogs} handleClick={blogArticleSelection}/> } />
        <Route path="/blog" element={ <BlogArticle blogArticle={blogArticle} /> } />
    </Routes>
    <Contacts />
    </>
  );
}

export default App;
