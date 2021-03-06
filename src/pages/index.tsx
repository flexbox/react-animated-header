import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/hero.png"
import Content from "../images/content.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <img src={Hero} alt="" />
    <img src={Content} alt="" />
  </Layout>
)

export default IndexPage
