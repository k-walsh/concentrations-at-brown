import "animate.css/animate.compat.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "../styles/styles.css";
import ImgModal from "./ImgModal";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

function Narrative() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
      // Remove the event listener after scrolling to the section
      window.removeEventListener("scroll", handleScroll);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AnimatedOnScroll animationIn="fadeInUp">
        <div className="narrative" ref={sectionRef}>
          <h1>Concentrations@Brown</h1>
          <h2>A Shift from Social Sciences to Physical Sciences</h2>
          <div class="divider"></div>
          <p>
            Brown University has a reputation as the “hippie” Ivy where students
            smoke weed, have no requirements, and major in something ridiculous
            like basketweaving. Well, actually Brown calls them{" "}
            <i>concentrations</i> (because we have to be fancy). Although Brown
            is traditionally known as a liberal arts school with strong
            humanities and social sciences departments, lately we have seen a
            shift in students concentrating in more technical fields. Whether
            this is a temporary phase or the mark of a new era, only time will
            tell.
          </p>
          <p>
            Back in 2005, Computer Science was one of the less popular
            concentrations at Brown, making up only 2.4% of undergraduate
            degrees. However, in the years since, it has steadily gained
            popularity, rising to comprise nearly 14% of degrees. This
            substantial jump is the greatest increase seen in the top 5
            concentration areas at Brown, according to the{" "}
            <a
              href="https://commondataset.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Common Data Sets
            </a>
            . While the social sciences reached its peak around 2010, it
            subsequently saw a significant drop, as more technical
            concentrations like Computer Science and Mathematics & Statistics
            simultaneously began to rise.
          </p>

          <ImgModal
            path="concentrations_in_flux"
            alt="concentrations in flux: computer science on the rise"
            id="chart1"
            idLarge="chart1"
          />

          <p>
            Every year, Brown, along with nearly every other 4-year college in
            the US,{" "}
            <a
              href="https://oir.brown.edu/institutional-data/common-data-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              publishes a report
            </a>{" "}
            compiling statistics on enrollment, demographics, academic programs,
            and more. Since this data is standardized across colleges in the US,
            the category names are not the same as Brown's <i>quirky</i>{" "}
            concentration names, but still represent the same general areas.
          </p>
          <p>
            Social Sciences, however, is comprised of many different
            concentrations at Brown, such as Economics, Education Studies,
            History, and more. Thus, this begs the question, what accounts for
            the decline in the social sciences since 2010? Is there a mass
            migration of students from traditional social science disciplines to
            the growing field of Computer Science? And if so, which
            concentrations is the decrease coming from?
          </p>
          <p>
            To explore these questions more deeply, I pulled data from Brown's{" "}
            <a
              href="https://oir.brown.edu/institutional-data/factbooks/degrees-completions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Office of Institutional Research
            </a>{" "}
            to examine trends in specific concentrations (now with Brown's{" "}
            <i>quirky</i> names!). Due to the large number of concentration
            Brown offers (over 80!!), concentrations with small enrollments and
            little change were grayed out. Note that this data is only available
            from 2014 (compared to 2005 above).
          </p>

          <ImgModal
            path="slopes"
            alt="slope chart of concentration changes"
            id="chart2"
            idLarge="chart2"
          />

          <p>
            Computer Science has risen drastically, tripling in size from 2014
            to 2023 and growing faster than any other concentration at Brown to
            become the most popular concentration with 236 graduates in 2023.
            Other physical sciences have also seen strong growth, such as
            Engineering, Applied Mathematics-Economics, Applied
            Mathematics-Computer Science, and Computer Science-Economics, with
            APMA-CS experiencing the 3rd fastest growth.
          </p>
          <p>
            Several humanities concentrations, seen in green above, also grew in
            size during this time, while others like History of Art &
            Architecture, Comparative Literature, and Theatre Arts & Performance
            Studies saw a decline. Interestingly, only one social science
            concentration (International & Public Affairs) has seen significant
            growth during this period, while all others either had moderate
            growth or declined. Economics, the most popular concentration in
            2014, experienced an 8% decrease, although it still remains the
            second most popular concentration in 2023.
          </p>
          <p>
            While no one social science field has seen a drastic decrease
            comparable to Computer Science's increase, overall, the individual
            concentrations in this area are declining from their 2014 levels.
            Perhaps with the growing focus of many students on post-graduation
            opportunities, students are shifting from social science fields like
            History, Environmental Studies, and Education into more lucrative
            technical fields.
          </p>
          <p>
            However, with the recent concerns over tech layoffs and the
            increasingly difficult job market, you may be wondering if this
            trend will continue? Or has Computer Science had its 15 minutes
            (years) of fame and will now begin a slow decline, paving the way
            for a new popular concentration?
          </p>
          <p>
            Enrollment in introductory Computer Science courses could provide
            insights into the future livelihood of the Computer Science
            concentration, as these courses are requirements for anyone planning
            to pursue the concentration. Since 2016, there has been a steady
            increase in enrollment in these introductory courses, rising year
            after year and increasingly marching upwards, in line with the
            trends of this concentration. However, the 2022-2023 school year saw
            the first slight decrease and the most recent year experienced the
            largest decrease yet, down <i>138</i> students from the previous
            year.{" "}
          </p>

          <ImgModal
            path="intro_cs"
            alt="area chart of cs intro class enrollment over time"
            id="chart3"
            idLarge="chart3"
          />

          <p>
            It's important to note that there are not any significant changes
            between these years with a drop in enrollment. The same number of
            introductory courses have been offered each year with a similar
            number of freshmen, sophomores, juniors, and seniors in each year.
            Of course, due to the open curriculum and nature of exploration at
            Brown, not everyone who takes an introductory Computer Science
            course will major in Computer Science. Perhaps this trend reversal
            means that fewer non-concentrators are electing to take a Computer
            Science course for “fun”. But also, I took my first Computer Science
            course not planning to take any more, and now I'm going into
            software engineering.
          </p>
          <p>
            Nevertheless, this is a stark reversal in the trend we have been
            seeing for years, and how introductory Computer Science course
            enrollment will fare and what this means for the future of the
            Computer Science concentration at Brown is a question only time can
            answer. Check back next year.
          </p>
        </div>
      </AnimatedOnScroll>
      <Footer />
    </div>
  );
}

export default Narrative;
