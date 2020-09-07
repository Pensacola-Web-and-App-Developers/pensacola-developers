import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import youtube from "../images/resources/youtube.jpg"
import webdocs from "../images/resources/webdocs.png"
import csslogo from "../images/resources/css.jpg"

const ResourcesPage = () => {
  const style = {
    width: "100% !important",
    height: "220px",
    border: "1px #ccc solid !important",
  }
  return (
    <Layout>
      <SEO title="Events" />
      <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-6">
        <h1 className="font-bold text-2xl sm:text-4xl mt-10">Resources</h1>
        <p className="text-center sm:text-xl py-4">
          Keep your brain fresh with some of this knowledge.
        </p>
      </section>
      <section className="flex flex-wrap justify-center items-center mx-auto px-4 py-4 resource-wrapper">
        <div
          className="bg-cool-grey-050 max-w-sm rounded shadow-md p-8 m-2 w-full sm:w-1/3 sm:min-h-0 cursor-pointer flex flex-col items-center"
          onClick={() => window.open("https://css-tricks.com/", "_blank")}
        >
          <img className="h-32" src={csslogo} alt="CSS-Tricks" />
          <p className="font-semibold text-lg text-light-blue-vivid-500 outline-none">
            CSS-Tricks
          </p>
          <p>
            CSS-Tricks is a great place to read articles, catch up and see the
            latest when it comes to Cascading Style Sheets.
          </p>
        </div>

        <div
          className="bg-cool-grey-050 max-w-sm rounded shadow-md p-8 m-2 w-full sm:w-1/3 sm:min-h-0 cursor-pointer flex flex-col items-center"
          onClick={() =>
            window.open("https://developer.mozilla.org/en-US/", "_blank")
          }
        >
          <img className="h-32" src={webdocs} alt="MDN Web Docs" />
          <p className="font-semibold text-lg text-light-blue-vivid-500 outline-none">
            MDN Web Docs
          </p>
          <p>
            Mozilla Developer Network Web Docs are hands down the forefront for
            getting information for front-end development.
          </p>
        </div>

        <div
          className="bg-cool-grey-050 max-w-sm rounded shadow-md p-8 m-2 w-full sm:w-1/3 sm:min-h-0 cursor-pointer flex flex-col items-center"
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCot6iIQkxQZnnFKwG2cO3iQ",
              "_blank"
            )
          }
        >
          <img className="h-32" src={youtube} alt="Pensacola YouTube" />
          <p className="font-semibold text-lg text-light-blue-vivid-500 outline-none">
            Pensacola Developers Tutorials
          </p>
          <p>
            Pensacola Developers' own custom tutorials! Check back frequently
            for new videos. Don't see one you like? Request it!
          </p>
        </div>
      </section>
      <br></br>
      <iframe
        scrolling="no"
        style={style}
        src="https://buttondown.email/pensacoladevs?as_embed=true"
      ></iframe>
    </Layout>
  )
}

export default ResourcesPage
