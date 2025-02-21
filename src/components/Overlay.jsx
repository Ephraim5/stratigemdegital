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
          <h1 className="logo">
            Welcome to Stratigem Digital
          </h1>
          <p className="intro__scroll">
            Your Growth Our Mission Let's Launch Your Business to New Heights!
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
        <p className="outro__text">
          Wish you had a great Services with us... Reload to explore again or wait for 6 seconds you will be redirected to about page...
        </p>
      </div>
    </div>
  );
};
