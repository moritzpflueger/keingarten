import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import iconInstagram from '../assets/iconInstagram.svg';
import iconWhatsapp from '../assets/iconWhatsapp.svg';
import LogoLHS from '../assets/LHS_Badge_mitZusatz_sw_Print.png';
import LogoTNC from '../assets/TNClogoPrimary_OU_CMYK_Europe.png';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-[lime] p-10 font-semibold flex flex-wrap justify-between items-center">
      {/* <div className="flex flex-col">
        <Link to={'/about'} className="hover:underline">{ t('menu.about') }</Link>
        <Link to={'/#registration'} className="hover:underline">{ t('menu.registration') }</Link>
        <Link to={'/#program'} className="hover:underline">{ t('menu.program') }</Link>
        <Link to={'/#faq'} className="hover:underline">{ t('menu.faq') }</Link>
        <Link to={'/contact'} className="hover:underline">{ t('menu.contact') }</Link>
      </div> */}    
      <div className="flex items-center justify-between md:gap-16 w-full md:w-auto">
        <p className="flex flex-col">
          <span className="mb-5 whitespace-nowrap">
            © {new Date().getFullYear()} Keingarten
          </span>
          <Link to="/impressum" className="hover:underline">impressum</Link>
          <Link to="/legal" className="hover:underline">legal notice</Link>                 
        </p>
        <div className="flex gap-5 items-center">
          <a href="https://www.instagram.com/keingartenxyz/" target="_blank" className="block">
            <img src={iconInstagram} alt="Instagram" className="w-12 md:w-16" />   
          </a>        
          <a href="https://chat.whatsapp.com/EKrevz698XsGSmPkDYo74V" target="_blank" className="block sm:hidden">
            <img src={iconWhatsapp} alt="Whatsapp" className="w-10" />   
          </a>             
        </div>
      </div>
      <div className='flex justify-center gap-5 mt-10 w-full md:w-auto'>
        <a 
          href="https://www.stuttgart.de/leben/umwelt/klima/klimastrategie/klima-aktionsprogramm/stuttgarter-klima-innovationsfonds/" 
          target="_blank" 
          className=""
        >
          <img src={LogoLHS} alt="LHS Logo" className="max-w-[160px]" />
        </a>
        <a 
          href="https://www.nature.org/en-us/about-us/where-we-work/europe/" 
          target="_blank" 
          className=""
        >
          <img src={LogoTNC} alt="LHS Logo" className="max-w-[160px]" />
        </a>
      </div>        
    </footer>
  );
};
export default Footer;