import React, { useState } from "react"
import { Link } from "gatsby"
import LogoIcon from "../../assets/forum-logo-dots.svg"
import LogoText from "../../assets/forum-logo-text.svg"
import ProfileIcon from "../../assets/profile.svg"
import SearchIcon from "../../assets/search.svg"

interface HeaderProps {
  siteTitle: string
}
interface LinkProps {
  title: string
}
interface LinksProps {
  allLinks: LinkProps[]
}

const allLinks = [
  { title: "Brexit" },
  { title: "Climate" },
  { title: "Copyright" },
  { title: "Migration" },
  { title: "Debate X" },
  { title: "Debate Y" },
  { title: "Debate Z" },
  { title: "Debate A" },
]

function Search() {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
      <div className="w-full px-2 lg:px-6">
        <label htmlFor="search" className="sr-only">
          Search articles
        </label>
        <div className="relative text-gray-300 focus-within:text-gray-400">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            id="search"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-gray-400 bg-opacity-25 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search projects"
            type="search"
          />
        </div>
      </div>
    </div>
  )
}

function Navigation({ allLinks: LinksProps }) {
  return (
    <div className="hidden md:flex px-4 sm:px-6 lg:px-8 py-3">
      <a
        href="#"
        className="-ml-8 px-3 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
      >
        All A-Z
      </a>
      {allLinks.map((link, index) => {
        return (
          <a
            href="#"
            key={index}
            className="ml-4 px-3 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
          >
            {link.title}
          </a>
        )
      })}
    </div>
  )
}

function NavigationMobile(
  { isMenuOpen, allLinks },
  { isMenuOpen: boolean, allLinks: [] }
) {
  return (
    <>
      <div className={`${isMenuOpen ? "translate-x-5" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {allLinks.map((link, index) => {
            return (
              <a
                href="#"
                key={index}
                className="mt-1 block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              >
                {link.title}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

function Header({ siteTitle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden h-8 w-auto">
                <LogoIcon />
              </div>
              <div className="hidden lg:block h-8 w-auto">
                <LogoText />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Search />
            <span className="rounded-full shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-full text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-indigo focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
              >
                <ProfileIcon />
                <span>Register</span>
              </button>
            </span>
          </div>
        </div>

        <Navigation allLinks={allLinks} />
        <NavigationMobile allLinks={allLinks} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  )
}

export default Header
