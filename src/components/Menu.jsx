import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LogoGartenKulturLabor from "../assets/2405031-Logo-GartenKulturLabor.png";
import iconClose from "../assets/iconClose.svg";
import LogoLHS from "../assets/Klimainnovationsfonds_Foerderbadge_RGB.png";
import LogoTNC from "../assets/TNClogoPrimary_OU_CMYK_Europe.png";

const Menu = ({ showMenu, hideMenu }) => {
  const { t } = useTranslation();

  if (!showMenu) return null;

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 py-6 text-2xl sm:text-5xl top-0 left-0 bg-white z-20 max-h-[100dvh] overflow-y-auto border-b-4 border-black">
          <li className="absolute top-3 right-1">
            <button onClick={hideMenu} className="w-12 h-12">
              <img src={iconClose} />
            </button>
          </li>
          <li
            className="text-2xl sm:text-4xl py-5 sm:py-10"
            style={{ fontFamily: "Phase" }}
          >
            <Link to="/" onClick={hideMenu}>
              Keingarten
            </Link>
          </li>
          <li className="mt-8 hover:underline">
            <Link to="/about" onClick={hideMenu}>
              {t("menu.about")}
            </Link>
          </li>
          <li className="mt-8 hover:underline">
            <Link to="/#faq" onClick={hideMenu}>
              {t("menu.faq")}
            </Link>
          </li>
          <li className="mt-8 hover:underline">
            <Link to="/contact" onClick={hideMenu}>
              {t("menu.contact")}
            </Link>
          </li>
          <li className="mt-8 sm:mt-16 mb-8 text-xl sm:text-2xl flex gap-2 sm:gap-5 flex-wrap items-center">
            <Link
              to="/impressum"
              onClick={hideMenu}
              className="hover:underline"
            >
              {t("menu.impressum")}
            </Link>
            /
            <Link to="/legal" onClick={hideMenu} className="hover:underline">
              {t("menu.legal")}
            </Link>
          </li>
          <li className="flex gap-16 my-3">
            <a
              href="https://www.stuttgart.de/leben/umwelt/klima/klimastrategie/klima-aktionsprogramm/stuttgarter-klima-innovationsfonds/"
              target="_blank"
              className="sm:flex-1"
            >
              <img
                src={LogoLHS}
                alt="LHS Logo"
                className="w-full max-w-[160px]"
              />
            </a>
            <a
              href="https://www.nature.org/en-us/about-us/where-we-work/europe/"
              target="_blank"
              className="sm:flex-1"
            >
              <img
                src={LogoTNC}
                alt="LHS Logo"
                className="w-full max-w-[160px]"
              />
            </a>
            <a
              href="https://atelier-zaumseil.de/startseite/"
              target="_blank"
              className="sm:flex-1"
            >
              <img
                src={LogoGartenKulturLabor}
                alt="LHS Logo"
                className="w-full max-w-[60px]"
              />
            </a>
          </li>
        </ul>
        <div
          onClick={hideMenu}
          className="absolute w-full h-full bg-black bg-opacity-25"
        ></div>
      </div>
    </nav>
  );
};

export default Menu;
