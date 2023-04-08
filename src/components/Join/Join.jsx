import React, {useRef} from 'react';
import './Join.css';


function Join() {
  return(
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">Quer</span>
                <span>evoluir</span>
            </div>
            <div>
                <span>seu corpo</span>
                <span className="stroke-text">conoscp ?</span>
            </div>
        </div>
        <div className='right-j'>
            <form action="" className='email-container'>
                <input type="email" name='user_email' placeholder='Digite seu email' />
                <button className='btn btn-j'>Entrar</button>
            </form>
        </div>
    </div>
  );
}

export default Join;