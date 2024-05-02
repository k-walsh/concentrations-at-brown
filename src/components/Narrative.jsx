import "../styles/styles.css";

function Narrative() {
  return (
    <div>
      <p>hi</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/concentrations_in_flux.png`}
        alt="concentrations in flux: computer science on the rise"
        className="chart"
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/slopes.png`}
        alt="slope chart of concentration changes"
        className="chart"
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/intro_cs.png`}
        alt="area chart of cs intro class enrollment over time"
        className="chart"
      />
      <div id="test">test</div>
    </div>
  );
}

export default Narrative;
