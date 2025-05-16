import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div>
      <div className='d-flex flex-row'>
        <div>
          <h1 className='BigHeader ms-5 ps-5 topElement '> WANT TO BECOME A <br/> PARTNERING <br/> BUSINESS? </h1>
          <p className='MidText text-left ps-5'> At GroupSoup, we believe community is a team effort. We need the partnership of Rochester’s small businesses to turn our vision of a vibrant, connected community into reality. Tell us about your goals, and let’s see how we can help! </p>
        </div>
        <img src={require('../images/GSVectorArrowWithOutline.png')} className='Arrow'></img>
      </div>
      <form>
        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mb-2 mt-2 w-25'>
            Company name:
          </label>
          <input type='text' id='companyNameInput' className='inputBox m-2'>
          
          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            Email:
          </label>
          <input type='email' id='companyEmailInput' className='inputBox m-2'>

          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            Phone:
          </label>
          <input type='email' id='companyPhoneInput' className='inputBox m-2'>

          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            Address:
          </label>
          <input type='email' id='companyAddressinput' className='inputBox m-2'>

          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            Subject:
          </label>
          <input type='email' id='companySubjectInput' className='inputBox m-2'>

          </input>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            Message:
          </label>
          <textarea rows="8" id='companyMessageInput' className='m-2'>

          </textarea>
        </div>

        <div className='d-flex align-items-center justify-content-center'>
          <label className='profileHeader m-5 mt-2 mb-2 w-25'>
            How did you hear about us?
          </label>
          <textarea rows="4" id='companyHearInput' className='m-2' >

          </textarea>
        </div>

        <button type='submit' className='bigButton d-flex align-items-center justify-content-center'> SUBMIT </button>
      </form>
      <footer></footer>
    </div>
  );
}

export default Contact;