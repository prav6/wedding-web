import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Countdown from 'react-countdown-now'
import { StaticImage } from "gatsby-plugin-image"




const Completionist = () => <span>October 28th, 2022</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {

    // Render a completed state

    return <Completionist />;

  } else {

    // Render a countdown

    
    
    return <div className="title">Countdown: {days} days  {hours} hours  {minutes} minutes  {seconds} seconds </div>;

  }
};

const IndexPage = () => (
<Layout>
  <div className="title">
    <h1>hello</h1>
  </div>
  <StaticImage
    src="../assets/images/main.jpeg"
    alt="couple"
    className="hero-img"
    placeholder="tracedSVG"
    layout="fullWidth"
  ></StaticImage>

  <div>    
    <Countdown
    date={"Oct 28, 2022 19:00:00"}
    renderer={renderer}
    />
  </div>
  <div>
    <header className="hero">
          <StaticImage
            src="../assets/images/main1.jpeg"
            alt="couple"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Welcome to our wedding website</h1>
              <h4>Have fun</h4>
            </div>
          </div>
    </header>
    
  </div>
  
</Layout>
)

export default IndexPage
