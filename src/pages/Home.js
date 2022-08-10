import React,{useState, useEffect} from 'react';
import './Home.css';
import HomePic from "../assets/catPic.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EmailIcon from '@mui/icons-material/Email';
import WelcomePic from '../assets/Wcat.png';
import { Button } from '@mui/material';

export const factUrl="https://catfact.ninja/fact";

export default function Home() {
  
  const firstFact = <p>For many years, the British Shorthair 
  has been named the country's most popular breed according to the Governing Council of the Cat Fancy
  (GCCF), and with its affectionate nature and teddy-bear good looks, it's not hard to see why. As far as personality goes, 
  the British Shorthair is an amazing cat.</p>;

  const [fact, setFact] = useState(firstFact);

  const [count, setCount] = useState(1);
  
  async function getCatFact(){
    setFact();
    setCount(count + 1);
    
    const fact = await fetch("https://catfact.ninja/fact");
    const factData = await fact.json();
    
    setFact(factData.fact);
  }
   
  

  return (
    <div data-testid="home" className='home__wrapper'>
      <div className='home'>
        <div className='home__Img--wrapper'>
          <img src={HomePic} alt="" className='home__Img'/>
        </div>
        <div className='info'>
          <div className='info__detail'>
            <h4 className='info__title'>FOLLOW US</h4>
            <div className='info__text--contacts'>
              <div className='info__text '>
                <CameraAltIcon className='icon red__hover'/>
                <InstagramIcon className='icon red__hover'/>
                <TwitterIcon className='icon red__hover'/>
                <FacebookIcon className='icon no__margin red__hover'/>
              </div>
            </div>
          </div>

          <div className='info__detail'>
            <h4 className='info__title'>CONTACTS</h4>
            <div className='info__text--contacts'>
              <div className='info__text red'>
                <PhonelinkRingIcon/>
                <p>&nbsp;&nbsp;</p>
                <p>+ 1 800 000 00</p>
              </div>
              <div className='info__text red'>
                <EmailIcon/>
                <p>&nbsp;&nbsp;</p>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='info__detail'>
            <h4 className='info__title'>LOCATION</h4>
            <div className='info__text'>
              <p>38 Jackson BLVD<br/><br/>
              STE 1020 CHICAGO<br/><br/>
              IL 60604-2340 </p>
            </div>
          </div>
        </div>
      </div>

      <div className='welcome'>
        <div className='welcome__pic--wrapper'>
          <img src={WelcomePic} alt='' className='welcome__pic'/>
        </div>
        <div className='border__bottom'></div>
          <div className='welcome__intro'>
            <h4 className='welcome__title'>WELCOME TO OUR WEBSITE</h4>
              <div className='welcome__text--wrapper'>
                {fact ? <>
                <p className='welcome__text'>{fact} <br/><br/> Fact #{count}</p></> 
                  : <>
                    <div class="loader">Loading...</div>
                    </>}
              </div>
            <button className='get__cats--btn' onClick={getCatFact}>GET MORE CAT FACTS</button>
          </div>
      </div>
    </div>
  )
}
