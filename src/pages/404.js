import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found" />
    <div className="wrapper">
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }} />
        <h1>Oops algo inesperado aconteceu!</h1>
        <p>Na internet, assim como na vida... nem sempre as coisas acontecem como a gente planeja! Ajude-nos a melhorar reportando o que levou a isso.</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left" />Voltar para pagina inicial</Link>
      <Link to="/contact" className="button -outline">Reportar problema <RiBugLine className="icon -right" /></Link>
    </div>
  </Layout>
)

export default NotFound