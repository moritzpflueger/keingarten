import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Imprint = () => {
  const { location } = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <section
      id="faq"
      className="p-5 pb-20 mx-auto max-w-4xl"
    >
      <h1
        className="font-serif text-5xl sm:text-7xl my-10"
        style={{ fontFamily: "Phase" }}
      >
        {t("imprint.title")}
      </h1>
      <p className="pb-32">
        GartenKulturLabor gUG
        <br />
        Tucholskystr. 14 A
        <br />
        70469 Stuttgart-Feuerbach
        <br />
        <br />
        Tel.:{" "}
        <a
          className="underline"
          href="tel:+4917632778701"
        >
          +49 176 327 787 01
        </a>
        <br />
        Mail:{" "}
        <a
          className="underline"
          href="mailto:keingarten.xyz@gmail.com"
        >
          keingarten.xyz@gmail.com
        </a>
      </p>
    </section>
  )
}

export default Imprint
