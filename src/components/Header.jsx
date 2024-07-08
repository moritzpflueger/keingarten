import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import GardenStatus from './GardenStatus';
import WeatherWidget from './WeatherWidget';
import iconMenu from '../assets/iconMenu.svg';
import IconSquare from './IconSquare';

const Header = ({ handleMenuClick, onHeightChange }) => {

  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setScrollPosition(totalScroll);
  };  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  useEffect(() => {
    const headerElement = headerRef.current;

    const updateHeaderHeight = () => {
      if (headerElement) {
        onHeightChange(headerElement.offsetHeight);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });
    if (headerElement) {
      resizeObserver.observe(headerElement);
    }
    // Initial measurement
    updateHeaderHeight();

    // Cleanup observer on unmount
    return () => {
      if (headerElement) {
        resizeObserver.unobserve(headerElement);
      }
    };
  }, [onHeightChange]); // Include onHeightChange in the dependency array to ensure it's captured correctly  

  return (
    <header 
      ref={headerRef}
      className="fixed z-50 top-0 bg-white grid grid-cols-2 sm:flex sm:items-center sm:justify-between p-5 pb-0 sm:pb-5 border-b-4 border-black w-full"
    >
      <div
        className="h-full top-0 left-0 absolute bg-[lime] mix-blend-multiply" 
        style={{ width: `${scrollPosition}%` }}
      />
      <h1 
        className="text-3xl font-serif col-span-1"
        style={{ fontFamily: 'Phase' }}
      >
        <Link to="/">keingarten</Link>
      </h1>
      <div className="w-full sm:pl-10 sm:flex-1 col-span-2 order-last sm:order-none flex items-center">
        <WeatherWidget />
        <GardenStatus />
      </div>
      <div className="col-span-1 flex gap-4 md:gap-32 flex-1 justify-end">
        <Link to="/images" title="Image Gallery" className="w-10 z-50">
          <IconSquare />
        </Link>
        <button 
          className="w-10 z-50"
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