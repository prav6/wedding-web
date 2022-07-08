import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"


const MyForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/a6b120db-1466-4de2-a7b7-0263cb64584f",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
    <Layout>
    
    <div className="page">

        <article className="contact-info">
            <h3>RSVP form</h3>
            <p>
            Please fill out the form below if you
            will be attending:
            </p>


            <div className='form contact-form'>
                
                <form onSubmit={handleOnSubmit}>
                <div className='form-row'>
                    <label htmlFor = "message">Attendance *</label>                 
                </div>
                 
                <div className="rsvp-attendance">
                    <label>
                        <div className="rsvp-attendance-options">
                        <div className="rsvp-attendance-option_1">
                            <input type="radio" name="RSVP Response" value="Yes"  required /> Yes
                        </div>
                        <div className="rsvp-attendance-option_2">
                            <input type="radio" name="RSVP Response" value="No" required /> Regretfully No
                        </div>
                        </div>
                    </label>
                </div>
                <div className='form-row'>
                    <label htmlFor = "name">Full name *</label>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div className='form-row'>
                    <label htmlFor = "email">Your email *</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className='form-row'>
                    <label htmlFor = "phone">Phone number *</label>
                    <input type="text" name="phone" id="phone" required/>
                </div>
                <div className='form-row'>
                    <label htmlFor = "number">Number of Guest *</label>
                    <input type="number" name="number" id="guest" min = "1"required/>
                </div>
                <div className='form-row'>
                    <label htmlFor = "message">Extra information</label>
                    <textarea name="message" id="message"></textarea>
                </div>
            
                <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                    Submit
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                    </p>
                )}
                </form>
            </div>
        </article>
    </div>  



    
  </Layout>
     
    );
  };
  
  export default MyForm;