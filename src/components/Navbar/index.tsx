import React, {useState} from 'react';
import s from './Navbar.module.scss';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const logo = require('../../assets/logo.png');
const logoText = require('../../assets/logo_text.png');
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.className = 'modalOpen'
  }
  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.className = ''
  }
  return (
    <header className={s.header}>

      <div className={'container'}>
        <nav className={s.nav}>
          <div className={s.logo}>
            <img src={logo} alt=""/>
            <img src={logoText} alt=""/>
          </div>
          <ul className={mobileMenuOpen ? `${s.menu} ${s.active}` : s.menu}>
            <li><a href="#">Product</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <div className={s.mobileBtn}>
            {mobileMenuOpen
              ? <AiOutlineClose size={30} onClick={closeMenu}/>
              : <AiOutlineMenu size={30} onClick={openMenu}/>
            }
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;