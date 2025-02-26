import { useTranslation } from "react-i18next";

const NewsletterTeaser = () => {
  const { i18n } = useTranslation(); // Get current language
  const language = i18n.language;

  return (
    <div className="newsletter-teaser">
      <div className="newsletter-form">
        {language === "de" ? (
          // German newsletter embed code will go here
          <div id="german-newsletter-container">
            <iframe
              width="540"
              height="500"
              src="https://df4ab9d1.sibforms.com/serve/MUIFABd4ql4-iaGKBINCN2md8LyuVjFBXRq1zYrq-DvdBH0hFbpeC0Xk_clNBCbZhVnASeBW_GVd6kI6gjVBG4wWq4LXaPJdvQQGXGxWM4nXdzi-lZNcsrFwDrie0QHXINM-r-HeWAknd3z-Lh0Lw9kiX4ha2uJaqjI3wiwwVapMkBPZcBZS-c3RF6CgxegYZCHy19469eKuqE5m"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            ></iframe>
          </div>
        ) : (
          // English newsletter embed code will go here
          <div id="english-newsletter-container">
            <iframe
              width="540"
              height="500"
              src="https://df4ab9d1.sibforms.com/serve/MUIFAIzb10hSRc7sO7Znc0HAXuls4M-Aid37l-TDHjTrFX-DW254K93rVLoOnQfSWMH4rKg3i3z1Ewk4-wr2Hk3YMln3s7Ds84uJCMHINNRZRF3v6G-b2mQEDBnL9cWDyAWqZLUBOW2qKnQRzy984hdSKSYkmtrl6S4bhllnz6NCs20Zh0p51fELaR20WAr0dZc0h1YPznAm75dg"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterTeaser;
