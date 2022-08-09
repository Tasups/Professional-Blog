import Navbar from './components/Navbar';
import Main from './components/Main';
import Contacts from './components/Contacts';

const Home = (props) => {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <Main blogs={props.blogs} handleClick={props.handleClick}/>
        <Contacts />
      </div>
    </>
  );
}

export default Home;
