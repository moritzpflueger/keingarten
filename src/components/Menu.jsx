import { Link } from 'react-router-dom';

import iconClose from '../assets/iconClose.svg';

const Menu = ({ showMenu, hideMenu }) => {

  if (!showMenu) return null;

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 py-6 text-4xl sm:text-5xl top-0 left-0 bg-white z-20 max-h-[100dvh] overflow-y-auto">
          <li className="absolute top-3 right-1">
            <button 
              onClick={hideMenu}
              className="w-12 h-12"
            >
              <img src={iconClose} />
            </button>
          </li>
          <li className="text-xl sm:text-2xl">
            <Link to="/" onClick={hideMenu}>
              Keingarten
            </Link>
          </li>
          {/* <li className="mt-16">
            <Link to="/#about" onClick={hideMenu}>
              About
            </Link>
          </li> */}
          <li className="mt-16">
            <Link to="/registration" onClick={hideMenu}>
              Registration
            </Link>
          </li>
          <li className="mt-16">
            <Link to="/faq" onClick={hideMenu}>
              FAQ
            </Link>
          </li>
          <li className="mt-16 mb-8 text-xl sm:text-2xl flex gap-2 sm:gap-5 flex-wrap">
            <Link to="/impressum" onClick={hideMenu}>
              Impressum
            </Link>
            /
            <Link to="/legal" onClick={hideMenu}>
              Legal Notice
            </Link>
          </li>
        </ul>   
        <div onClick={hideMenu} className="absolute w-full h-full bg-black bg-opacity-25"></div>
      </div>
    </nav>
  );
};

export default Menu;
