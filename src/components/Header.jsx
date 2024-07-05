import { Link } from 'react-router-dom';

import iconMenu from '../assets/iconMenu.svg';
import iconCircle from '../assets/iconCircle.svg';
import iconSquare from '../assets/iconSquare.svg';

const Header = ({ handleMenuClick }) => {

  return (
    <header className="flex justify-between p-5 border-b-4 border-black">
      <h1 className="text-2xl font-serif">
        <Link to="/">keingarten.xyz</Link>
      </h1>
      <div className="w-full sm:pl-10 sm:flex-1 col-span-2 order-last sm:order-none">
        <WeatherWidget />
      </div>
      <div className="col-span-1 flex gap-4 md:gap-32 flex-1 justify-end">
        <button 
          className="w-10"
          role="button"
          onClick={() => alert('Layout by Square View (WiP)')}
        >
          <img src={iconSquare} className="w-full md:rotate-90" />
        </button>
        <button 
          className="w-10"
          role="button"
          onClick={() => alert('Layout by Circle View (WiP)')}
        >
          <img src={iconCircle} className="w-full" />
        </button>
        <button 
          className="w-10"
          role="button"
          onClick={handleMenuClick}
        >
          <img src={iconMenu} className="w-full" />
        </button>        
      </div>
    </header>
  );
};

export default Header;