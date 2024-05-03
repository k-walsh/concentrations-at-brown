import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "../styles/cover.css";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

function CoverPage() {
  return (
    <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
      <div
        className="coverPage"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/brown5.png)`,
        }}
      >
        <div className="title">
          <div className="typewriter">
            <h1>Concentrations@Brown</h1>
          </div>
          <h2>A Shift from Social Sciences to Physical Sciences</h2>
        </div>
      </div>
      <div className="source">
        <PhotoCameraOutlinedIcon
          style={{ color: "#a1a1a1" }}
          fontSize="small"
        />
        <p>usnews</p>
      </div>
    </AnimatedOnScroll>
  );
}

export default CoverPage;
