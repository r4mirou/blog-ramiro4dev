import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import "../assets/scss/style.scss"

const Footer = () => (
  <footer className="site-footer">
    <div className="container" >
      <p>Developed <span className="icon -love"><RiHeart2Line style={{animation: "pulse 1.2s linear infinite"}}/></span> by  <a href="http://www.ramiro4dev.com.br">Ramiro4Dev</a></p>
    </div>
  </footer>
)

export default Footer