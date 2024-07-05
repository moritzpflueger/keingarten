import { Link } from 'react-router-dom';

import iconMenu from '../assets/iconMenu.svg';
import iconCircle from '../assets/iconCircle.svg';
import iconSquare from '../assets/iconSquare.svg';

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
      className="fixed top-0 bg-white grid grid-cols-2 sm:flex sm:items-center sm:justify-between p-5 pb-0 sm:pb-5 border-b-4 border-black w-full"
    >
      <div
        className="h-full top-0 left-0 absolute bg-[lime] mix-blend-multiply" 
        style={{ width: `${scrollPosition}%` }}
      />
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