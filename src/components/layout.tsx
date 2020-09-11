import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/tailwind.css"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="bg-gray-100">
        <main className="max-w-6xl mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
