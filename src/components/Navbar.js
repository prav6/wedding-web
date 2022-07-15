import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Shanujan and Prableen wedding" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          {/* <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Our story
          </Link> */}
          <Link
            to="/events"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Schedule
          </Link>
          <Link
            to="/rsvp"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            RSVP
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar