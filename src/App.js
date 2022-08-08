
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';

function App() {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Contacts />
      </div>
    </>
  );
}

export default App;
