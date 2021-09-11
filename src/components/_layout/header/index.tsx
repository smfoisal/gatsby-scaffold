import React from "react"
import { Link } from "gatsby"
import { Container } from "components/_root"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="p-4 border-b border-gray-200">
    <Container>
      <Link to="/">{siteTitle}</Link>
    </Container>
  </header>
)

export default Header
