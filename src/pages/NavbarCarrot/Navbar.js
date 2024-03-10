import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
// Icons
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

// Images
import logoWlogin from '../../images/CarrotSvg/SmartCarrotNewLogo.svg';

// Elements
import { Nav, NavbarContainerSignup, NavLogo, MobileIcon, SvgLogo } from './NavbarElements'

const Navbar = (props) => {

  const {
    toggle,
  } = props;

  // const [scrollNav, setScrollNav] = useState(false)
  // const [bgLogin, setBgLogin] = useState(false);
  const [logoColor, setLogoColor] = useState(logoWlogin);

  // const changeNavOnScroll = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNavOnScroll)
  // }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav 
          // scrollNav={scrollNav} 
          // bgLogin={bgLogin}
          >
          <NavbarContainerSignup>
            <NavLogo to="/" onClick={toggleHome}>
              <SvgLogo className="logoImage" src={logoColor} />
            </NavLogo>
            {/*}MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>*/}
          </NavbarContainerSignup>
        </Nav>
      </IconContext.Provider>
    </>
  )
}


export default Navbar ;
