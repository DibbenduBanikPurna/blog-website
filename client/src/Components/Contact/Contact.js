import React from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_02xyes8', 'template_fb3lmie', e.target, 'user_9Bd2QAgonb6gDRkHll4e9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="col-md-7 m-auto mt-5 pt-5 ">
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                    <input name="name" type="text" placeholder="Your Name"/>
                    <input name="email"  type="email" placeholder="Your Email"/>
                    <input name="phone" type="text" placeholder="Your Phone Number"/>
                </div>
                <div className="mt-4">
                <textarea name="message" rows="8" className="form-control" placeholder="Message">

               </textarea>
                </div>
                  

                    <button className="btn btn-outline-primary mt-2" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;