import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home'>
      <img src={require('../images/Overlay.png')} className='Overlay'></img>
      <h1 id='HomeText'>MEET <br/> SOUPER <br/>PEOPLE.</h1>
      
    </div>
  );
}

export default Home;