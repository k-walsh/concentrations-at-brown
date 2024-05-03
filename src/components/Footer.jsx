import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "../styles/footer.css";

function Footer() {
  return (
    <AnimatedOnScroll animationIn="fadeInUp">
      <div className="foot">
        {/* <div className="footLine"></div> */}

        <div className="about">
          <div className="dataAbout">
            <p>
              <b>
                <i>About the data!</i>
              </b>
            </p>
            <p>
              The data sources for this narrative include the{" "}
              <a
                href="https://oir.brown.edu/institutional-data/common-data-set"
                target="_blank"
                rel="noopener noreferrer"
              >
                common data sets
              </a>{" "}
              published by Brown's Office of Institutional Research (OIR), as
              well as data from the OIR's{" "}
              <a
                href="https://oir.brown.edu/institutional-data/factbooks/degrees-completions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Degrees & Completions Factbook
              </a>
              . The data on course enrollment was obtained by scraping{" "}
              <a
                href="https://cab.brown.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Courses@Brown
              </a>
              .
            </p>
          </div>
          <div className="me">
            <p>
              <b>
                <i>About me!</i>
              </b>
            </p>
            <p>
              My name is Kiera Walsh and I am a senior graduating from Brown
              University. I study Computer Science and Behavioral Decision
              Sciences and I love all things data, design, and development! This
              data narrative was crafted as my final project for Data1500 at
              Brown under the instruction of Reuben Fischer-Baum.
            </p>
          </div>
        </div>
        <a
          href="https://k-walsh.github.io"
          target="blank"
          rel="noopener noreffer"
          id="portfolio"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/sun2.png`}
            alt="sun"
            id="sunFoot"
          />
          <p>check out my portfolio for more of my work!</p>
        </a>
      </div>
    </AnimatedOnScroll>
  );
}

export default Footer;
