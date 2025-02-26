import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const NewsletterConfirmation = () => {
  const { t } = useTranslation();

  return (
    <section id="welcome" className="p-5 pb-20 mx-auto max-w-4xl">
      <h1
        className="font-serif text-6xl sm:text-7xl my-10"
        style={{ fontFamily: "Phase" }}
      >
        {t("confirmation.title")}
      </h1>
      <h2 className="text-2xl mt-2">{t("confirmation.message")}</h2>
      <Link
        to="/"
        className="font-bold mt-10 inline-block px-5 py-2 bg-black text-white"
      >
        {t("confirmation.back")}
      </Link>
    </section>
  );
};

export default NewsletterConfirmation;
