import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "components/_root"

import Layout from "components/_layout"
import Seo from "components/_layout/seo"
// import ASTRONAUT from "assets/img/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src={"../assets/img/gatsby-astronaut.png"}
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/test-page/">Go to page 2</Link> <br />
      </p>
    </Container>
  </Layout>
)

export default IndexPage
