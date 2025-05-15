import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home'>
      <img src={require('../images/Overlay.png')} className='Overlay'></img>
      <img src={require('../images/lameimage.jpg')} className='fullImage'></img>
      <h1 id='HomeText' className='topElement'>MEET <br/> SOUPER <br/>PEOPLE.</h1>

    </div>
  );
}

export default Home;