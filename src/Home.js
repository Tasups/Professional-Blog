import { useEffect } from 'react'

import Main from './components/Main';

const Home = (props) => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <div className="App">
        <Main blogs={props.blogs} handleClick={props.handleClick}/>
      </div>
    </>
  );
}

export default Home;
