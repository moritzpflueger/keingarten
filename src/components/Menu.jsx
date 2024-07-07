import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import iconClose from '../assets/iconClose.svg';

const Menu = ({ showMenu, hideMenu }) => {

  if (!showMenu) return null;
  const { t } = useTranslation();

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 py-6 text-4xl sm:text-5xl top-0 left-0 bg-white z-20 max-h-[100dvh] overflow-y-auto border-b-4 border-black">
          <li className="absolute top-3 right-1">
            <button 
              onClick={hideMenu}
              className="w-12 h-12"
            >
              <img src={iconClose} />
            </button>
          </li>
          <li 
            className="text-2xl sm:text-4xl py-10"
            style={{ fontFamily: 'Phase' }}
          >
            <Link to="/" onClick={hideMenu}>
              Keingarten
            </Link>
          </li>
          <li className="mt-16 hover:underline">
            <Link to="/programme" onClick={hideMenu}>
              {t('menu.program')}
            </Link>
          </li>
          <li className="mt-16 hover:underline">
            <Link to="/faq" onClick={hideMenu}>
              {t('menu.faq')}
            </Link>
          </li>
          <li className="mt-16 mb-8 text-xl sm:text-2xl flex gap-2 sm:gap-5 flex-wrap">
            <Link to="/impressum" onClick={hideMenu} className="hover:underline">
              {t('menu.impressum')}
            </Link>
            /
            <Link to="/legal" onClick={hideMenu} className="hover:underline">
              {t('menu.legal')}
            </Link>
          </li>
        </ul>   
        <div onClick={hideMenu} className="absolute w-full h-full bg-black bg-opacity-25"></div>
      </div>
    </nav>
  );
};

export default Menu;
