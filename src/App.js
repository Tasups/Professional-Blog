import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
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
    console.log(selectedArticle)
    setBlogArticle(selectedArticle[0])
  }
  /*
  const handleTicketClick = (e, id) => {
    e.preventDefault()
    const newTicket = tickets.filter(ticket => ticket.id === id)
    let newTicketForDescription = newTicket[0]
    setTicketForDescription(newTicketForDescription)
    let newComment = tickets.filter(ticket => ticket.id === id)
    let newComments = newComment[0]
    setComments(newComments.comments)
    setParentID(id)
  }
  */
  
  return (
    <Routes>
        <Route path="/" element={ <Home blogs={blogs} handleClick={blogArticleSelection}/> } />
        <Route path="/blog" element={ <BlogArticle blogArticle={blogArticle} /> } />
    </Routes>
  );
}

export default App;
