import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Countdown from 'react-countdown-now'
import { StaticImage } from "gatsby-plugin-image"
import main1 from "../assets/images/main1.jpeg"




const Completionist = () => <span>October 28th, 2022</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {

    // Render a completed state

    return <Completionist />;

  } else {

    // Render a countdown

    
    
    return <div>{days} days  {hours} hours  {minutes} minutes  {seconds} seconds </div>;

  }
};

const IndexPage = () => (
<Layout>
  
 
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
              <h1>Welcome</h1>
              <h4>Countdown</h4>
              <Countdown
    date={"Oct 28, 2022 19:00:00"} 
    renderer={renderer}
    />
            </div>
          </div>
    </header>
    
  </div>

  <main className="page">
    <section className="about-page">
      <article>
        <h2 >This is our wedding website</h2>
        <p>
          On this website we have listed out our story,
          our events and have our rsvp form attached as well
          Please fill it out asap!
        </p>
        <p>
          Hopefully you can make it to out special day
        </p>
        <Link to="/rsvp" className="btn">
          RSVP
        </Link>
      </article>
      <StaticImage
            src="../assets/images/main.jpg"
            alt="couple"
            className="about-img"
            placeholder="blurred"
      ></StaticImage>
          

    </section>
  </main>





</Layout>
)

export default IndexPage
