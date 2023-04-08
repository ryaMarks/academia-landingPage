import React, {useRef} from 'react';
import './Join.css';


function Join() {
  return(
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">read to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className="stroke-text">with us ?</span>
            </div>
        </div>
        <div className='right-j'>
            <form action="" className='email-container'>
                <input type="email" name='user_email' placeholder='Enter your email' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  );
}

export default Join;