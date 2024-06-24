import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Imprint = () => {

  const { location } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="p-10">
      <h1 
        className="text-4xl sm:text-5xl font-serif my-10 sm:my-16"
        style={{ fontFamily: 'Synt, serif' }}
      >
        Impressum
      </h1>
      <p className="pb-32">
        Sekretariat Transdisziplinarität
        <br />
        Toni-Areal
        <br />
        Pfingstweidstrasse 96
        <br />
        Postfach
        <br />
        CH-8031 Zürich
        <br />
        <br />

        <a className="underline" href="tel:+41434463333">Tel. +41 43 446 33 33</a>
        <br />
        <a className="underline" href="mailto:kontakt.mtr@zhdk.ch">kontakt.mtr@zhdk.ch</a>

        <br />
        <br />
        Opening Times, Room 4.T 61:
        <br />
        Monday till Friday, 8.30–11.30h
      </p>
    </section>
  );
};

export default Imprint;