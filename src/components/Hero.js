import HeroImg from '../assets/hero.png';
import { AiOutlineGithub , AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Front-end developer',
        social: {
            github: 'https://github.com/ManobalanB',
            facebook: 'https://www.facebook.com/Manobalanvj.Mano/',
            linkedin: 'https://www.linkedin.com/in/manobalan01/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2  flex flex-col'>
            <h1 className=' text-white text-7xl font-hero-font relative top: 3.75rem'>Hi, <br/> Im <span className='text-black'>B</span> MANOBALAN 
                <p className='text-4xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                
            </div>
       </div>
       <img className='md:w-1/3 relative bottom: 4.75rem;' src={HeroImg} />
    </section>
}
