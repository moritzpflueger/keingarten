import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import iconInstagram from '../assets/iconInstagram.svg';
import LogoLHS from '../assets/LHS_Badge_mitZusatz_sw_Print.png';
import LogoTNC from '../assets/TNClogoPrimary_OU_CMYK_Europe.png';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-[lime] p-10 font-semibold">
      <div className="flex flex-col">
        <Link to={'/about'} className="hover:underline">{ t('menu.about') }</Link>
        <Link to={'/#registration'} className="hover:underline">{ t('menu.registration') }</Link>
        <Link to={'/#program'} className="hover:underline">{ t('menu.program') }</Link>
        <Link to={'/#faq'} className="hover:underline">{ t('menu.faq') }</Link>
        <Link to={'/contact'} className="hover:underline">{ t('menu.contact') }</Link>
      </div>
      <div className='flex flex-wrap gap-20 w-full my-10'>
        <a 
          href="https://www.stuttgart.de/leben/umwelt/klima/klimastrategie/klima-aktionsprogramm/stuttgarter-klima-innovationsfonds/" 
          target="_blank" 
          className="sm:flex-1"
        >
          <img src={LogoLHS} alt="LHS Logo" className="w-full" />
        </a>
        <a 
          href="https://www.nature.org/en-us/about-us/where-we-work/europe/" 
          target="_blank" 
          className="sm:flex-1"
        >
          <img src={LogoTNC} alt="LHS Logo" className="w-full" />
        </a>
      </div>      
      <div class="flex flex-col md:flex-row md:items-center md:gap-10">
        <a href="https://www.instagram.com/keingartenxyz/" target="_blank" className="mb-5 md:mb-0">
          <img src={iconInstagram} alt="Instagram" className="w-10" />   
        </a>        
        <Link to="/impressum" className="hover:underline">impressum</Link>
        <Link to="/legal" className="hover:underline">legal notice</Link>        
        <div className="md:ml-auto mt-10 md:mt-0">
          © {new Date().getFullYear()} Keingarten
        </div>
      </div>
    </footer>
  );
};
export default Footer;