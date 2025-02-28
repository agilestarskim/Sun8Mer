import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Posts from "../components/Posts"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Portfolio />
    <Posts />
    <Contact />
  </Layout>
)

export const Head = () => <Seo/>

export default IndexPage
