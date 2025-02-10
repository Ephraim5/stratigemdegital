import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useNavigate } from 'react-router-dom';

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const navigate = useNavigate();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            <img src="./images/Stratigem Digital Logo.png" alt="" className="img" />
            Welcome to Stratigem Digital
             {/* <div className="spinner">
              <div className="spinner__image" />
            </div>  */}
          </h1>
          <h2 className="set font-serif font-bold text-2xl uppercase " style={{zIndex:15900}}  onClick={() => {
            console.log("navigating...")
            navigate('/about');
          }}
          >About Us</h2>
         
          <b className="intro__scroll">
            Your Growth Our Mission Let's Launch Your Business to New Heights!<br></br>
            <br />
            <center>
              Scroll to begin the journey
            </center>
          </b>
          <button
            className="explore bg-white"
            onClick={() => {
              setPlay(true);
            }}
          >
            Start Your Journey Today!
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great Services with us... Reload to explore again</p>
      </div>
    </div>
  );
};
