// import React, { useEffect } from 'react'
// import Headings from './Headings';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import contactimg from '../Components/img/contactme.jpg';


// const Contact = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration (in milliseconds)
//       easing: 'ease-in-out', // You can change the easing
//       once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
//     });
//   }, []);


//   return (
//     <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600 py-10 md:py-28'>
//         <Headings portfolioheading = "Contact Me" />
         

//         <div className='flex flex-col-reverse md:flex-row justify-around items-center mx-auto lg:mx-5 lg:py-5'>
//             <div className=' p-1 md:p-3 m-1 flex justify-start items-center flex-col md:w-1/2' data-aos="fade-down">
//             <h1 className='text-lg md:text-xl text-center md:text-start p-1'>If your want to discuss more in details, please contact me</h1>
//             <a href="mailto:bharathi.jana01@gmail.com" className="curser-pointer text-lg md:text-xl p-3">
//                 Email: <strong className='hover:underline'>bharathi.jana01@gmail.com</strong>
//             </a>
//             <a href="tel:+6383765538" className="curser-pointer text-lg md:text-xl p-3 ">
//             Mobile No: <strong className='hover:underline'>6383765538</strong>
//             </a>
            
//             </div>
//             <div className='p-3 md:p-2 w-2/5 flex justify-center items-center '>
//                 <img src={contactimg} alt="home" width="500px" height="500px"
//                   className='hover:shadow-md hover:shadow-fuchsia-800' />
//             </div>
            
            
            

//         </div>

        
        
      
//     </div>
//   )
// }

// export default Contact

import React, { useEffect, useState } from 'react';
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactimg from '../Components/img/contactme.jpg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '', 
    from_email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send form data via EmailJS
    emailjs.sendForm(
      'service_g8d4xyx',  // Service ID
      'template_tyox3qh', // Template ID
      e.target,           // Form data (e.target)
      'pbqJsI3JnpQ6_DJOf'  // Public Key (User ID)
    )
      .then((result) => {
        console.log('Email sent: ', result.text);
        setIsSubmitting(false);
        alert('Your message has been sent!');
        setFormData({ from_name: '', from_email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
        setIsSubmitting(false);
        alert('Something went wrong. Please try again.');
      });
  };

  // Check if form is valid (all fields are filled)
  const isFormValid = formData.from_name && formData.from_email && formData.message;

  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600 py-10 md:py-28'>
      <Headings portfolioheading="Contact Me" />

      <div className='flex flex-col-reverse md:flex-row justify-around items-center mx-auto lg:mx-5 lg:py-5'>
        <div className='p-1 md:p-3 m-1 flex justify-start items-center flex-col md:w-1/2' data-aos="fade-down">
          <h1 className='text-lg md:text-xl text-center  p-1'>
            If you want to discuss more in details, please contact me
          </h1>
          <a href="mailto:bharathi.jana01@gmail.com" className="curser-pointer text-lg md:text-xl p-3">
            <span className='font-semibold'>Email: </span><strong className='hover:underline'>bharathi.jana01@gmail.com</strong>
          </a>
          <a href="tel:+6383765538" className="curser-pointer text-lg md:text-xl p-3">
            <span className='font-semibold' >Mobile No: </span> <strong className='hover:underline'>6383765538</strong>
          </a>

          {/* Contact Form */}
          <div className='mx-auto w-full xl:w-3/4'>
            <h1 className='text-lg md:text-xl text-center pt-8'>
            You can also get in touch with me by filling out the form below
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input
                type='text'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                placeholder='Enter your Name'
                className='p-3 my-2 border border-gray-300 rounded text-lg'
                required
              />
              <input
                type='email'
                name='from_email' 
                value={formData.from_email}
                onChange={handleChange}
                placeholder='Enter your Email address'
                className='p-3 my-2 border border-gray-300 rounded text-lg'
                required
              />
              <textarea
                name='message' 
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your Message'
                className='p-3 my-2 border border-gray-300 rounded text-lg'
                required
              ></textarea>

              <button
                type='submit'
                className={`p-3 my-2 bg-black text-white rounded text-xl ${!isFormValid ? 'cursor-not-allowed bg-gray-700' : ''}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className='p-3 md:p-2 w-2/5 flex justify-center items-center'>
          <img src={contactimg} alt="contact" width="500px" height="500px" className='hover:shadow-md hover:shadow-fuchsia-800' />
        </div>
      </div>
    </div>
  );
};

export default Contact;

