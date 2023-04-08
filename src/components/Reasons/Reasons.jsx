import React from 'react';
import './Reasons.css';
/* Importando imagens */
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

function Reasons() {
  return(
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Alguns motivos de por que</span>

            <div>
                <span>nos escolher ?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>Mais de 140 professores especializados</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Treine mais inteligente e mais rápido que antes</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Programa gratuito para novos membros</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Programa de acompanhamento de membros</span>
                </div>
            </div>
            <span style={{
                color: 'var(--gray)', 
                fontWeight: 'normal',
            }}>Nossos parceiros</span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Reasons;