import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (

    <div id='home'>

      {/* <img src={require('../images/Overlay.png')} className='Overlay'></img> */}
      {/* <img src={require('../images/lameimage.jpg')} className='fullImage'></img> */}

      <h1 id='HomeImage' className='HugeHeader'>MEET <br/> SOUPER <br/>PEOPLE.</h1>

      <h1 className='MidHeader text-center '> SOCIAL MEDIA, REIMAGINED TO HELP <br/> YOU ACCESS COMMUNITY. </h1>
      
      <section className='d-flex flex-row m-5'>

        <section className='d-flex flex-column w-25 text-left'>
          <p className='SmallText fw-bold'>
            Communities get smaller as we age.
          </p>
          <p className='SmallText'>
            This is due to... <br/>
          </p>

          <ul className='SmallText'>
            <li> busier schedules after education </li>
            <li> increased responsibilities </li>
            <li> lack of built-in community </li>
            <li> people passing with age </li>
          </ul>
        </section>

        <section className='d-flex flex-column w-25 text-left'>
          <p className='SmallText fw-bold'>
            Built-in communities are far and few.
          </p>
          <p className='SmallText'>
            85% of American adults are unable to maintain access to high-quality built-in communities provided in higher education. <br/> <br/>
            Less than 43% of Americans have active in-person relationships that are proven to aid mental health. 
          </p>
        </section>
        
        <section className='d-flex flex-column w-25 text-left'>
          <p className='SmallText fw-bold'>
            A lack of community leads to increased mental health risks.
          </p>
          <p className='SmallText'>
            Research tells us that people can process their challenges better with the presence of appraisal support and community.
          </p>
        </section>

        <section className='d-flex flex-column w-25 text-left'>
          <p className='SmallText fw-bold'>
            Community is the key to living well.
          </p>
          <p className='SmallText'>
            Community held great importance during times of uncertainty during the 14th  century; this methodology has been lost over time.    
          </p>
        </section>

      </section>

      <section>
        <h1 className='MidHeader'> WHAT MAKES GROUPSOUP DIFFERENT? </h1>
        <img src={require('../images/Chart.png')} width='100%' id='Chart' alt='Competitor comparison chart'></img>
      </section>

      <section>
        <h1 className='MidHeader text-center mb-4'> OUR SPECIAL RECIPE </h1>
        
        <section className='VectorSection'>
          <img  src={require('../images/GSVectorArt1.webp')} className='VectorArt' alt='Map pin graphic'></img>
          <p className='SmallText fw-bold w-25 d-flex align-items-center justify-content-center'>
            Hyperlocal city-specific growth model
          </p>
          <p className='SmallText'> 
            Starting in Rochester, NY, GroupSoup will aim to increase foot traffic in businesses and lower the crime experienced by lower-income individuals.  via frequent market analysis.
          </p>
        </section>

        <section className='VectorSection'>
          <img  src={require('../images/GSVectorArt2.webp')} className='VectorArt' alt='Ad block graphic'></img>
          <p className='SmallText fw-bold w-25 d-flex align-items-center justify-content-center'>
            Minimal Digital Distraction        
          </p>
          <p className='SmallText'> 
            While being a social platform, unlike bigger media companies, we want you off the app and in the world! We aim to have an action-based engagement model rather than an attention-based one.      
          </p>
        </section>

        <section className='VectorSection'>
          <div>
            <img  src={require('../images/GSVectorArt3.webp')} id='SoupPlant' className='VectorArt' alt='Growing sprout'></img>
          </div>
          <p className='SmallText fw-bold w-25 d-flex align-items-center justify-content-center'>
            Helping the broader Rochester community thrive.        
          </p>
          <p className='SmallText'> 
            By utilizing local brick-and-mortar businesses, GroupSoup avoids fixed-rent costs while aiding foot traffic for the small Rochesterian-owned businesses.         
          </p>
        </section>
      </section>

      <section id='HomeFooter'>

        <section className='d-flex flex-row pb-5'>
          <h1 className='MidHeader text-center mt-5'> We plan to keep things fun and safe simultaneously </h1>
          <p className='MidText text-right mt-5 ms-4 pt-5 pe-5'> GroupSoup will partner with local businesses to create meeting hubs along with our inherent “buddy-system” platform model for people to safely interact with one another.  </p>
        </section>

        <div className='Bar mt-5 mb-5'></div>

        <section className='d-flex flex-row'>
          <img src={require('../images/GSVectorArrowWithOutline.webp')} className='ArrowInverse' alt='Content guiding arrow'></img>
          
          <div className='d-flex flex-column'>
            <h1 className='BigHeader text-center ps-0 pe-0 pt-5'> JOIN THE COMMUNITY REVOLUTION </h1>
            <Link className='LinkStyles flex-grow-0' to='/register'>
              <div tabIndex={0} role='button' className='hugeLink d-flex align-items-center justify-content-center' >
                PRE-REGISTER HERE 
              </div>
            </Link> 
          </div>
          
          <img src={require('../images/GSVectorArrowWithOutline.webp')} className='Arrow' alt='Content guiding arrow'></img>   
        </section>

        <footer></footer>

      </section>
      
    </div>
  );
}

export default Home;