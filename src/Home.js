import Main from './components/Main';

const Home = (props) => {
  return (
    <>
      <div className="App">
        <Main blogs={props.blogs} handleClick={props.handleClick}/>
      </div>
    </>
  );
}

export default Home;
