import React from 'react';
import { Link } from 'react-router-dom';


function Register() {

  return (

    <div>

      <section>
        <div className='d-flex flex-row'>
          <img src={require('../images/GSVectorArrowWithOutline.webp')} className='ArrowInverse' alt='Content guiding arrow'></img>
          <h1 className='BigHeader text-center topElement mb-5 ms-0 me-0 w-100'>JOIN THE COMMUNITY <br/> REVOLUTION</h1>
          <img src={require('../images/GSVectorArrowWithOutline.webp')} className='Arrow' alt='Content guiding arrow'></img>
        </div>

        <p className='MidText secondThird mt-0'> Be among the first to discover what life can be like with an accessible, vibrant community through GroupSoup in Rochester, NY! Please provide the information below so that we can reach out to you when we launch to the public!</p>
      </section>

      <form>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='nameInput' className='profileHeader m-5'>
            Name:
          </label>
          <input type='text' id='nameInput' name='nameInput' className='inputBox'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='emailInput' className='profileHeader m-5 mt-1 mb-1'>
            Email:
          </label>
          <input type='email' id='emailInput' name='emailInput' className='inputBox'></input>
        </section>

        <button type='submit' className='bigButton'> SUBMIT </button>

      </form>

      <footer></footer>
      
    </div>
  );
}

export default Register;