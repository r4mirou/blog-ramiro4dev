import React from "react"
import Header from "./header"
import Navigation from "./navigation";
import { Link } from "gatsby"
import Logo from '../../static/assets/logo.png';
import "../assets/scss/style.scss"
import Footer from "./footer";

const Layout = ({ children, className }) => {
  return (
    <div>
      <Header>
        <div className={"container-row"}>
          <div>
            <Link to={"/"}>
              <img src={Logo} className={"logo-img-header"} alt="Imagem logo" />
            </Link>
          </div>
          <Link to={"/"}>
            <div className={"logo-text-header"}>
              <b>BLOG!</b>
            </div>
          </Link>
        </div>
        <Navigation />
      </Header>
      <main className={"spacing container " + className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

