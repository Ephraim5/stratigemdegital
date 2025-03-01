import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const navigate = useNavigate();

  useEffect(() => {
    if (end) {
      const timeout = setTimeout(() => {
        navigate("/about");
      }, 6000); // 6 seconds delay for smooth navigation to about page

      return () => clearTimeout(timeout); // Cleanup in case component unmounts..
    }
  }, [end, navigate]);

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      }`}
    >
      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <img src="./images/Stratigem Digital Logo.png" alt="" style={{ display:play ? 'none':''}} className="img" />
          <h1 className="logo">
            Welcome to Stratigem Digital
            
          </h1>
          <p className="intro__scroll">
            Your Growth Our Mission Let's Take Your Business to New Heights!
            <br />
            <br />
            <center>Scroll to begin the journey</center>
          </p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Start Your Journey Today!
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text p-11">
          we hope you enjoyed your journey with us today, and now understand that the possibilities are endless. Reload explore again , or wait 6 seconds to be directed to our contact page 
        </p>
      </div>
    </div>
  );
};
