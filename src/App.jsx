import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

import FAQ from "./components/FAQ";
import NewsletterTeaser from "./components/NewsletterTeaser";
import Event from "./components/Event";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.hash);
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div>
      <Event />
      <NewsletterTeaser />
      <FAQ />
    </div>
  );
}

export default App;
