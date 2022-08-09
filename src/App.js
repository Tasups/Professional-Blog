import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './Home.js'
import BlogArticle from './components/BlogArticle.js'

function App() {
  
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/blog" element={ <BlogArticle /> } />
    </Routes>
  );
}

export default App;
