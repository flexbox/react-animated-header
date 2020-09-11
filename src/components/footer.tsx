import React, { ReactElement } from "react"

interface Props {}

export default function footer({}: Props): ReactElement {
  return (
    <footer className="max-w-6xl mx-auto p-5">
      <div className="text-gray-400">© {new Date().getFullYear()}</div>
    </footer>
  )
}
