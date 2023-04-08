import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData.js';
import whiteTick from '../../assets/whiteTick.png';

function Plans() {
  return(
    <div className="plans-container" id='Plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>inicie</span>
            <span>sua jornada</span>
            <span className='stroke-text'>conosco</span>
        </div>

        {/* Plans Card */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>R$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i) =>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>Veja mais benefícios-></span>
                    </div>
                    <button className='btn'>Entrar</button>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Plans;