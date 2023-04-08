import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
/*Import Images*/
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
/* importa animações */
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

function Hero() {
  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<=768? true: false;
  return (
    <div className="hero" id='hero'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* Anuncio tipo span */}
            <div className="the-best-ad">
                <motion.div
                  initial={{left: mobile?'178px':'238px'}}
                  whileInView={{left: '8px'}}
                  transition={transition}
                ></motion.div>
                <div></div>
                <span>A melhor academia da cidade</span>
            </div>

            {/* HERO HEADING */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>You</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam consequatur consequuntur eos reprehenderit dolores soluta dolore!
                </span>
              </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                </span>
                <span>profissionais</span>
              </div>
              <div>
                <span>
                  <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                </span>
                <span>membros</span>
              </div>
              <div>
                <span><NumberCounter end={50} start={0} delay='4' preFix="+"/></span>
                <span>programas fitness</span>
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn"> Learn More</buttons>
            </div>

            {/* Hero Images */}
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img
              initial={{right:'11rem'}}
              whileInView={{right: '20rem'}}
              transition={transition}
              src={hero_image_back} 
              alt="" 
              className='hero-image-back'
            />

            {/* Calories */}
            <motion.div 
              initial={{ right: "37rem" }}
              whileInView={{ right: "28rem" }}
              transition={transition}
              className="calories"
            >
              <img src={Calories} alt="" />
                <div>
                  <span>Calories Burned</span>
                  <span>220kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default Hero;