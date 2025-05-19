import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {

  return (

    <div>

      <section className='d-flex flex-row'>
        <div>
          <h1 className='BigHeader ms-5 ps-5 topElement '> WANT TO BECOME A <br/> PARTNERING <br/> BUSINESS? </h1>
          <p className='MidText text-left ps-5'> At GroupSoup, we believe community is a team effort. We need the partnership of Rochester’s small businesses to turn our vision of a vibrant, connected community into reality. Tell us about your goals, and let’s see how we can help! </p>
        </div>
        <img src={require('../images/GSVectorArrowWithOutline.webp')} className='Arrow' alt='Content guiding arrow'></img>
      </section>

      <form>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyNameInput' className='profileHeader m-5 mb-2 mt-2 w-25'>
            Company name:
          </label>
          <input type='text' id='companyNameInput' name='companyNameInput' className='inputBox m-2'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyEmailInput' className='profileHeader m-5 mt-2 mb-2 w-25'>
            Email:
          </label>
          <input type='email' id='companyEmailInput' name='companyEmailInput' className='inputBox m-2'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyPhoneInput' className='profileHeader m-5 mt-2 mb-2 w-25'>
            Phone:
          </label>
          <input type='tel' id='companyPhoneInput' name='companyPhoneInput' className='inputBox m-2'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyAddressInput' className='profileHeader m-5 mt-2 mb-2 w-25'>
            Address:
          </label>
          <input type='text' id='companyAddressInput' name='companyAddressInput' className='inputBox m-2'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companySubjectInput' className='profileHeader m-5 mt-2 mb-2 w-25'>
            Subject:
          </label>
          <input type='text' id='companySubjectInput' name='companySubjectInput' className='inputBox m-2'></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyMessageInput' className='profileHeader m-5 mt-2 mb-2 w-25'>
            Message:
          </label>
          <textarea rows="8" id='companyMessageInput' name='companyMessageInput' className='m-2'></textarea>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for="companyHearAbout" className='profileHeader m-5 mt-2 mb-2 w-25'>
            How did you hear about us?
          </label>
          <textarea rows='4' id='companyHearInput' name='companyHearAbout' className='m-2' ></textarea>
        </section>

        <button type='submit' className='bigButton d-flex align-items-center justify-content-center'> SUBMIT </button>
      
      </form>

      <footer></footer>

    </div>
  );
}

export default Contact;