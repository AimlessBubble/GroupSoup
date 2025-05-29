import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (

    <div id='home'>

      {/* <img src={require('../images/Overlay.png')} className='Overlay'></img> */}
      {/* <img src={require('../images/lameimage.jpg')} className='fullImage'></img> */}

      <h1 id='HomeImage' className='HugeHeader'>MEET <br/> SOUPER <br/>PEOPLE.</h1>

      <h1 className='MidHeader text-center '> SOCIAL MEDIA, REIMAGINED TO HELP <br/> YOU ACCESS COMMUNITY. </h1>
      
      <Accordion className='d-flex flex-column flex-md-row m-5'>

        <Accordion.Item eventKey='0' className='d-flex flex-column w-100 w-md-25 text-left'>
          <Accordion.Header>
            <div className='SmallText fw-bold'>
              Communities get smaller as we age.
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='SmallText ps-4 ps-md-0'>
              This is due to... <br/>
              <ul className='SmallText'>
                <li> busier schedules after education </li>
                <li> increased responsibilities </li>
                <li> lack of built-in community </li>
                <li> people passing with age </li>
            </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1' className='d-flex flex-column w-100 w-md-25 text-left'>
          <Accordion.Header>
            <div className='SmallText fw-bold'>
              Built-in communities are far and few.
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='SmallText ps-4 ps-md-0'>
              85% of American adults are unable to maintain access to high-quality built-in communities provided in higher education. <br/> <br/>
              Less than 43% of Americans have active in-person relationships that are proven to aid mental health. 
            </div>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey='2' className='d-flex flex-column w-100 w-md-25 text-left'>
          <Accordion.Header>
            <div className='SmallText fw-bold'>
              A lack of community leads to increased mental health risks.
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='SmallText ps-4 ps-md-0'>
             Research tells us that people can process their challenges better with the presence of appraisal support and community.
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3' className='d-flex flex-column w-100 w-md-25 text-left'>
          <Accordion.Header>
            <div className='SmallText fw-bold'>
              Community is the key to living well.
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='SmallText ps-4 ps-md-0'>
              Community held great importance during times of uncertainty during the 14th  century; this methodology has been lost over time.    
            </div>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

      <section>
        <h1 className='MidHeader text-center'> WHAT MAKES GROUPSOUP DIFFERENT? </h1>
        <img src={require('../images/Chart.png')} width='100%' id='Chart' alt='Competitor comparison chart'></img>
      </section>

      <section>
        <h1 className='MidHeader text-center mb-4'> OUR SPECIAL RECIPE </h1>
        
        <Accordion className='h-100'>
          <Accordion.Item eventKey='4' className='VectorSection'>
            <Accordion.Header>
              <img  src={require('../images/GSVectorArt1.webp')} className='VectorArt' alt='Map pin graphic'></img>
              <p className='SmallText fw-bold w-auto w-md-25 d-flex align-items-center justify-content-center'>
                Hyperlocal city-specific growth model
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className='SmallText w-100 text-left'> 
                Starting in Rochester, NY, GroupSoup will aim to increase foot traffic in businesses and lower the crime experienced by lower-income individuals.  via frequent market analysis.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='5' className='VectorSection'>
            <Accordion.Header>
              <img  src={require('../images/GSVectorArt2.webp')} className='VectorArt' alt='Ad block graphic'></img>
              <p className='SmallText fw-bold w-auto w-md-25 d-flex align-items-center justify-content-center'>
                Minimal Digital Distraction        
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className='SmallText w-100 text-left'> 
                While being a social platform, unlike bigger media companies, we want you off the app and in the world! We aim to have an action-based engagement model rather than an attention-based one.      
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='6' className='VectorSection h-100'>
            <Accordion.Header id='PlantButton'>
              <div className='d-flex flex-column justify-content-end h-100'>
                <img  src={require('../images/GSVectorArt3.webp')} id='SoupPlant' className='VectorArt' alt='Growing sprout'></img>
              </div>
              <p className='SmallText fw-bold w-auto w-md-25 d-flex align-items-center justify-content-center'>
                Helping the broader Rochester community thrive.        
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className='SmallText w-100 text-left'> 
                By utilizing local brick-and-mortar businesses, GroupSoup avoids fixed-rent costs while aiding foot traffic for the small Rochesterian-owned businesses.         
              </p>
            </Accordion.Body>
          </Accordion.Item>

          </Accordion>
        </section>

      <section id='HomeFooter'>

        <section className='d-flex flex-column flex-md-row pb-5'>
          <h1 className='MidHeader text-center mt-5'> We plan to keep things fun and safe simultaneously </h1>
          <p className='MidText text-center p-auto mt-5 ms-md-4 pt-md-5 pe-md-5'> GroupSoup will partner with local businesses to create meeting hubs along with our inherent “buddy-system” platform model for people to safely interact with one another.  </p>
        </section>

        <div className='Bar mt-5 mb-5'></div>

        <section className='d-flex flex-row'>
          <img src={require('../images/GSNewVectorArrow.webp')} className='ArrowInverse pb-5 mb-5 ' alt='Content guiding arrow'></img>
          
          <div className='d-flex flex-column'>
            <h1 className='BigHeader text-center ps-0 pe-0 pt-5'> JOIN THE COMMUNITY REVOLUTION </h1>
            <Link className='LinkStyles flex-grow-0' to='/register'>
              <div tabIndex={0} role='button' className='hugeLink d-flex align-items-center justify-content-center' >
                PRE-REGISTER HERE 
              </div>
            </Link> 
          </div>
          
          <img src={require('../images/GSNewVectorArrow.webp')} className='Arrow pb-5 mb-5 ' alt='Content guiding arrow'></img>   
        </section>

        <footer></footer>

      </section>
      
    </div>
  );
}

export default Home;