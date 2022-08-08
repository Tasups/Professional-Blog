import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Contacts from './components/Contacts';

function App() {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
        <Contacts />
      </div>
    </>
  );
}

export default App;
