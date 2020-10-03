import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Obrigado"/>
    <div className="wrapper">
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Mensagem enviada com sucesso!</h1>
      <p>Obrigado, seu contato é sempre muito importante.</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Voltar para Home</Link>
    </div>
  </Layout>
)

export default Thanks