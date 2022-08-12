import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { TiArrowBack } from "react-icons/ti"

const Hero = () => {
  return (
    <section id="hero" className="py-16 lg:py-12">
      <div className="md:flex justify-center align-center items-center w-full">
        <div className="text-center">
          <h1 className="text-8xl font-bold font-lato mb-8">Not Found</h1>
          <p className="text-lg mb-8">
            The page you're looking for does not exist.
          </p>
          <div className="flex justify-center">
            <Link to="/" className=" text-white flex space-x-4">
              <TiArrowBack size="20" /> <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)
export const Head = () => <Seo title="Not Found" />

export default IndexPage
