import React, { useEffect} from 'react'
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMeImg from '../Components/img/about.png';
import GithubImg from '../Components/img/github.png';
import WhatsappImg from '../Components/img/whatsapp.png';
import EmailImg from '../Components/img/email.png';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: 'ease-in-out', // You can change the easing
          once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
        });
      }, []);

  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600  py-10 md:py-28'>
    <Headings portfolioheading = "What I Do" /> 
    <div className='flex flex-row-reverse flex-wrap md:flex-row lg:flex-row justify-center items-center mx-auto  lg:mx-5 lg:py-5'>
        
        <div className=''>
            <img src={AboutMeImg} alt="about me" width="800px" height="500px" className='hover:shadow-md hover:shadow-fuchsia-800' />
        </div>

        <div class="max-w-3xl mx-auto p-2" data-aos="fade-down">
        
        <p class="text-lg text-gray-800">
            Hi! I'm Bharathi, a passionate Front-End Developer with a strong focus on building interactive and responsive websites. 
            With a deep understanding of HTML5, CSS3, and JavaScript, I specialize in creating seamless user experiences and engaging web interfaces.
        </p>
        <p class="text-lg text-gray-800 my-4">
            I have hands-on experience working with <strong>React</strong>, a powerful JavaScript library, to build dynamic and high-performing web applications. 
            I also use <strong>Material UI</strong> for designing clean and modern user interfaces, as well as <strong>Tailwind CSS</strong> and <strong>Bootstrap </strong> 
            to ensure responsiveness and flexibility in all my projects.
        </p>
        {/* <p class="text-lg text-gray-800 mt-4">
            Whether it's coding from scratch or building on existing frameworks, I thrive in creating beautiful, functional, and user-friendly websites. 
            My goal is to continuously learn and leverage the best tools and technologies to provide optimal solutions for users and clients alike.
        </p> */}
        <div className='flex justify-center gap-4'>
        <a href='https://github.com/bharathijana1?tab=repositories' target='_blank'>
            <img src={GithubImg} alt="github" width="70px" />
        </a>
        <a href='tel:+6383765538' target='_blank'>
            <img src={WhatsappImg} alt="whatsapp" width="70px" />
        </a>
        <a href='mailto:bharathi.jana01@gmail.com' target='_blank'>
            <img src={EmailImg} alt="email" width="70px" />
        </a>

        </div>

        


        </div>
        
      
    </div>
    </div>
    
  )
}

export default AboutMe
