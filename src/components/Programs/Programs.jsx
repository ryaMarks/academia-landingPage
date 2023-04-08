import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

function Programs() {
  return(
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore  nossos</span>
            <span>Programas</span>
            <span className='stroke-text'>para você</span>
        </div>
        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Entrar</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Programs;