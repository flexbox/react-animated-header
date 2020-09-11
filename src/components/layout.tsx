import React, { ReactChildren } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/tailwind.css"

interface LayoutProps {
  children: ReactChildren
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
        <h1 className="text-3xl">This is a 3xl text</h1>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
