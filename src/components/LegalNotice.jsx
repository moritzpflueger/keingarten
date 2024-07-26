import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

const LegalNotice = () => {
  const { location } = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <section className="p-10 w-full mx-auto max-w-4xl">
      <h1
        className="font-serif text-5xl sm:text-7xl my-10"
        style={{ fontFamily: "Phase" }}
      >
        {t("legal.title")}
      </h1>
      <div className="pb-20 sm:pb-32">
        <p>
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at{" "}
          <a
            className="underline"
            href="mailto:keingarten.xyz@gmail.com"
          >
            keingarten.xyz@gmail.com
          </a>
          .{" "}
        </p>
        <br />
        <h2 className="mb-2 font-semibold text-xl">
          Disclaimers for keingarten.xyz
        </h2>
        <p>
          All the information on this website - keingarten.xyz - is published in
          good faith and for general information purpose only. FMeral does not
          make any warranties about the completeness, reliability and accuracy
          of this information. Any action you take upon the information you find
          on this website (keingarten.xyz), is strictly at your own risk. FMeral
          will not be liable for any losses and/or damages in connection with
          the use of our website.
        </p>
        <br />
        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>
        <br />
        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>
        <br />
        <h2 className="mb-2 font-semibold text-xl">Consent</h2>
        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
        <br />
        <h2 className="mb-2 font-semibold text-xl">Update</h2>
        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
    </section>
  )
}

export default LegalNotice
