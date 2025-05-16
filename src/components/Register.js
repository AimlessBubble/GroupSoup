import React from 'react';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div>
      <h1 className='BigHeader text-center topElement'>JOIN THE COMMUNITY <br/> REVOLUTION</h1>
      <p className='MidText secondThird'> Be among the first to discover what life can be like with an accessible, vibrant community through GroupSoup in Rochester, NY! Please provide the information below so that we can reach out to you when we launch to the public!</p>

      <form>
        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5'>
            Name:
          </label>
          <input type='text' id='nameInput' className='inputBox'>
          
          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-1 mb-1'>
            Email:
          </label>
          <input type='email' id='emailInput' className='inputBox'>

          </input>
        </div>

        <button type='submit' className='bigButton'> SUBMIT </button>
      </form>
    </div>
  );
}

export default Register;