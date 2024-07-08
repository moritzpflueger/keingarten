import { Link } from 'react-router-dom';
import iconInstagram from '../assets/iconInstagram.svg';
import LogoLHS from '../assets/LHS_Badge_mitZusatz_sw_Print.png';
import LogoTNC from '../assets/TNClogoPrimary_OU_CMYK_Europe.png';

const Footer = () => {
  return (
    <footer className="bg-[lime] p-10">
      <p>
        Curatorial concept and implementation: Kirill Agafonov, Florian Amoser, Jonas Bernetta, Sharon Chan, Alisha Dutt Islam, Nistiman Erdede, Hannah Essler, Micol Favini, Tsz Hei Fung, Christian Gieben, Emanuel Haab, Roni Idrizaj, Charles Kwong, Ludwig Lederer, Sébastien Mitra, Engy Mohsen, Hans-Jakob Mühlethaler, Jan Reimann, Hiba Tahhan, Soraya Tashima, Anastasia Tatarenko, Egor Tatarenko. Supervision and support: Nicole Frei, Simon Grab, Patrick Müller, Nicholas Schärer, Irene Vögeli       
      </p>
      <div className="flex flex-wrap items-center justify-between py-10 order-1 gap-5">
        <Link to="/legal" >legal notice</Link>
        <div className="flex mx-auto pt-8 sm:pt-0 gap-5 items-center sm:justify-center order-3 sm:order-2">

          <a href="https://www.instagram.com/keingartenxyz/" target="_blank">
            <img src={iconInstagram} alt="Instagram" className="w-10" />   
          </a>

          {/* TODO: Add icon and link to ZHDK? */}
          {/* https://www.zhdk.ch/ */}

        </div>
        <Link to="/impressum" className="order-2 sm:order-3">impressum</Link>
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
      <div class="flex justify-end">
        <p>© {new Date().getFullYear()} Keingarten</p>
      </div>
    </footer>
  );
};
export default Footer;