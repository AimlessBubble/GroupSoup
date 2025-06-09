
import { useState } from 'react';
import supabase from "../supabaseClient"

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase
      .from("preregisteration")
      .insert([{ name, email }]);

    if (error) {
      console.error(error); 
      setStatus("Submission failed. Please try again.");
    } else {
      setStatus("Thank you for registering!");
      setName("");
      setEmail("");
    }
  };

  return (

    <div>

      <section>

        <div className='d-flex flex-row'>
          <img src={require('../images/GSNewVectorArrow.webp')} className='ArrowInverse ' alt='Content guiding arrow'></img>
          <div  className='d-flex flex-column'>
            <h1 className='BigHeader text-center topElement mb-5 ms-0 me-0 w-100'>JOIN THE COMMUNITY <br/> REVOLUTION</h1>
            <p className='MidText m-1 m-md-4 mb-5'> Be among the first to discover what life can be like with an accessible, vibrant community through GroupSoup in Rochester, NY! Please provide the information below so that we can reach out to you when we launch to the public!</p>
          </div>
          <img src={require('../images/GSNewVectorArrow.webp')} className='Arrow ' alt='Content guiding arrow'></img>
        </div>
      
      </section>

      <form onSubmit={handleSubmit}>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='nameInput' className='profileHeader m-5'>
            Name:
          </label>
          <input type='text' id='nameInput' name='nameInput' className='inputBox m-2' value={name} onChange={e=> setName(e.target.value)} required></input>
        </section>

        <section className='d-flex align-items-center justify-content-center'>
          <label for='emailInput' className='profileHeader m-5 mt-1 mb-1'>
            Email:
          </label>
          <input type='email' id='emailInput' name='emailInput' className='inputBox m-2' value={email} onChange={e=> setEmail(e.target.value)} required></input>
        </section>

        <button type='submit' className='bigButton'> SUBMIT </button>


        <div>
          {status}
        </div>
      </form>

      <footer></footer>
      
    </div>
  );
}

export default Register;