import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Hero = () => {
  return (
    <section id="hero" className="py-16 lg:py-12">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-24 sm:gap-6 max-w-[14440px] ">
        <div className="text-center lg:text-left">
          <StaticImage
            src="../images/kekego-logo-full.svg"
            loading="eager"
            height={40}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="mb-16"
          />

          <h1 className="font-lato text-5xl sm:text-6xl sm:mb-16 mb-8 max-w-2xl">
            Fast & easy transportation within Babcock University.
          </h1>
          <p className="mb-2 tracking-wide max-w-2xl lg:text-justify">
            Coming soon...
          </p>
          <div className="h-1 w-16 bg-alt mx-auto lg:mx-0"></div>
        </div>

        <div className="w-fit max-w-2xl overflow-clip">
          <StaticImage
            src="../images/hero-image.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            className=""
            width={500}
            alt="Fast and easy transportation within Babcock
            University."
          />
        </div>
      </div>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
