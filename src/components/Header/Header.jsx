import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-scroll';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

function Header() {
  const mobile = window.innerWidth<=768? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return(
    <div className='header'>
        <img className='logo' src={Logo} alt="" />
        {(menuOpened === false && mobile === true) ? 
          ( <div
              style={{
                backgroundColor: 'var(--appColor)', 
                padding: '0.5rem', 
                borderRadius: '5px',
                cursor: 'pointed'
              }}

              onClick={()=>setMenuOpened(true)}
            ><img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/></div>
          ) :
          <ul className='header-menu'>
            <li>
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass='activate'
                  to='hero'
                  span={true}
                  smooth={true}
                >Home</Link>
              </li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='programs'
                span={true}
                smooth={true}
              >Programas</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='reasons'
                span={true}
                smooth={true}
              >Sobre nós</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='Plans'
                span={true}
                smooth={true}
              >Planos</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='Testimonials'
                span={true}
                smooth={true}
              >Depoimentos</Link></li>
          </ul>
        }
    </div>
  );
}

export default Header;