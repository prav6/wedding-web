import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople} from "react-icons/bs"
import { FaUserTie } from "react-icons/fa"
import {GoLocation} from "react-icons/go"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"


const events = () => {
  return (
    <Layout>
      <main className="page">
        <h1> </h1>
        <h1> Friday 28th October </h1>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <article className="recipe-info">
              <h2>Sangeet</h2>
              <p>The sangeet is a pre-wedding event that takes place prior to north-Indian weddings.
                Sangeet translates to "Sung together" in sanskrit and it celebrates the union of
                both families through the children getting married. The night will include dancing and singing performances
                from both familes and from everyone who attends.
              </p>
              <p>
                The event will take Veranda Terrace which is right next to the Savoy Beach Hotel. The dress code for this event is 
                traditional (we would love to see a lot of colours) and don't forget to bring you dancing shoes!
              </p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Timings</h5>
                  <p>From 7pm to late</p>
                </article>
                <article>
                  <FaUserTie />
                  <h5>Dress Code</h5>
                  <p>Traditional</p>
                </article>
                <article>
                  <GoLocation />
                  <h5>Location</h5>
                  <p>Veranda Terrace </p>
                </article>
                
              </div>
            </article>
            <StaticImage
            src="../assets/images/sangeet.jpg"
            alt="couple"
            className="about-img1"
            placeholder="blurred"
      ></StaticImage>
          </section>
        </div>
        <h1>Saturday 29th October </h1>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <StaticImage
                src="../assets/images/Anand.jpg"
                alt="couple"
                className="about-img1"
                placeholder="blurred"
            ></StaticImage>
            <article className="recipe-info">
              <h2>Anand Karaj</h2>
              <p> The Anand Karaj is the Traditional Sikh marriage ceremony. This wedding symbolises the 
                'Blissful Union' of the bridge and groom in the presence of the Holy Guru Granth Sahib (holy book).  
              </p>
              <p>
                The ceremony will take place at the Garden of Love at the Savoy Beach Hotel and it will be followed by
                lunch (from 12pm) at the White Terrace also at the Savoy Beach Hotel
              </p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Timings</h5>
                  <p>From 8:30am</p>
                </article>
                <article>
                  <FaUserTie />
                  <h5>Dress Code</h5>
                  <p>Traditional</p>
                </article>
                <article>
                  <GoLocation />
                  <h5>Location</h5>
                  <p>Savoy Beach Hotel </p>
                </article>
              </div>
            </article>
          </section>
        </div>

        <h1> </h1>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <article className="recipe-info">
              <h2>Church wedding</h2>
              <p> This is the Tamil Catholic church wedding. The church wedding symbolises the promise of marriage between
                the bride and the groom in the presence of God.
              </p>
              <p>
                The mass will take place at the Santurio del Getsemani, transfers will be arranged from the Savoy Beach Hotel.
              </p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Timings</h5>
                  <p>From 3pm</p>
                </article>
                <article>
                  <FaUserTie />
                  <h5>Dress Code</h5>
                  <p>Suits and Sarees</p>
                </article>
                <article>
                  <GoLocation />
                  <h5>Location</h5>
                  <p>Santurio del Getsemani</p>
                </article>
                
              </div>
            </article>
            <StaticImage
            src="../assets/images/church-wed.jpg"
            alt="couple"
            className="about-img1"
            placeholder="blurred"
      ></StaticImage>
          </section>
        </div>
        <h1></h1>
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <StaticImage
                src="../assets/images/reception.jpg"
                alt="couple"
                className="about-img1"
                placeholder="blurred"
            ></StaticImage>
            <article className="recipe-info">
              <h2>Reception</h2>
              <p> The reception is where we see the bride and groom after they are officially married to celebrate their
                new marriage. The night to never forget of dancing in the most glamorous attire. The reception will start with
                a cocktail hour followed by the reception.
              </p>
              <p>
                The cocktail hour will take place at the Pavillion at the Savoy Beach Hotel and it will be followed by
                reception at the Ballroom also at the Savoy Beach Hotel.
              </p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Timings</h5>
                  <p>From 6pm</p>
                </article>
                <article>
                  <FaUserTie />
                  <h5>Dress Code</h5>
                  <p>Black tie (Indian or Western) </p>
                  <p>Dress to impress</p>
                </article>
                <article>
                  <GoLocation />
                  <h5>Location</h5>
                  <p>Savoy Beach Hotel </p>
                </article>
              </div>
            </article>
          </section>
        </div>








      </main>


    </Layout>
  )
}

export default events