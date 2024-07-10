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
      className="fixed z-50 top-0 bg-white flex items-center justify-between p-5 pb-0 lg:pb-5 border-b-4 border-black w-full"
    >
      <div
        className="h-full top-0 left-0 absolute bg-[lime] mix-blend-multiply" 
        style={{ width: `${scrollPosition}%` }}
      />
      <div className="w-full flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <h1 
          className="z-50 text-3xl font-serif"
          style={{ fontFamily: 'Phase' }}
        >
          <Link to="/">keingarten</Link>
        </h1>
        <WeatherWidget />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-32 justify-end items-end">
        <GardenStatus className="order-last lg:order-none self-start" />
        <div className="flex justify-between mr-auto gap-6 lg:gap-32">
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
      </div>
    </header>
  );
};

export default Header;