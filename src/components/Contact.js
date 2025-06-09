
import { useState } from 'react';
import supabase from "../supabaseClient"

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [hear_about, setHearAbout] = useState("");
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase
      .from("contact")
      .insert([{ name, email, phone, address, subject, message, hear_about}]);

    if (error) {
      console.error(error); 
      setStatus("Submission failed. Please try again.");
    } else {
      setStatus("Thank you for registering!");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setSubject("");
      setMessage("");
      setHearAbout("");
    }
  };

  return (

    <div>

      <section className='d-flex flex-row'>
        <div>
          <h1 className='BigHeader ms-4 ps-4 ms-md-5 ps-md-5 topElement '> WANT TO BECOME A <br/> PARTNERING <br/> BUSINESS? </h1>
          <p className='MidText text-left ps-5'> At GroupSoup, we believe community is a team effort. We need the partnership of Rochester’s small businesses to turn our vision of a vibrant, connected community into reality. Tell us about your goals, and let’s see how we can help! </p>
        </div>
        <img src={require('../images/GSNewVectorArrow.webp')} className='Arrow' alt='Content guiding arrow'></img>
      </section>

      <form onSubmit={handleSubmit}>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyNameInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Company name:
          </label>
          <input type='text' id='companyNameInput' name='companyNameInput' className='inputBox m-2' value={name} onChange={e=> setName(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyEmailInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Email:
          </label>
          <input type='email' id='companyEmailInput' name='companyEmailInput' className='inputBox m-2' value={email} onChange={e=> setEmail(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyPhoneInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Phone:
          </label>
          <input type='tel' id='companyPhoneInput' name='companyPhoneInput' className='inputBox m-2' value={phone} onChange={e=> setPhone(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyAddressInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Address:
          </label>
          <input type='text' id='companyAddressInput' name='companyAddressInput' className='inputBox m-2' value={address} onChange={e=> setAddress(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companySubjectInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Subject:
          </label>
          <input type='text' id='companySubjectInput' name='companySubjectInput' className='inputBox m-2' value={subject} onChange={e=> setSubject(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='companyMessageInput' className='profileHeader m-3 mt-2 mb-2 w-25'>
            Message:
          </label>
          <textarea rows="8" id='companyMessageInput' name='companyMessageInput' className='m-2' value={message} onChange={e=> setMessage(e.target.value)} required></textarea>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for="companyHearInput" className='profileHeader m-3 mt-2 mb-2 w-25'>
            How did you hear about us?
          </label>
          <textarea rows='4' id='companyHearInput' name='companyHearInput' className='m-2' value={hear_about} onChange={e=> setHearAbout(e.target.value)} required></textarea>
        </section>

        <button type='submit' className='bigButton d-flex align-items-center justify-content-center'> SUBMIT </button>
      
        <div>
          {status}
        </div>

      </form>

      <footer></footer>

    </div>
  );
}

export default Contact;