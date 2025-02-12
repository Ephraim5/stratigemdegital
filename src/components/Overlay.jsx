import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useNavigate } from "react-router-dom";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const navigate = useNavigate();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      }`}
    >
      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : "intro"}`}>
          {/* Logo and Title */}
          <h1 className="logo text-center p-4">
            <img
              src="./images/Stratigem Digital Logo.png"
              alt="Stratigem Digital Logo"
              className="img mx-auto"
            />
            Welcome to Stratigem Digital
          </h1>

          {/* Default About Us Navigation Text (visible on all screens) */}
          <h2
            className="set font-serif font-bold text-sm sm:text-xl md:text-2xl uppercase w-full text-center px-4 break-words pl-10 relative"
            style={{ zIndex: 15900 }}
            onClick={() => {
              console.log("navigating...");
              navigate("/about");
            }}
          >
            About Us
          </h2>

          {/* Additional About Button for extra-small screens only */}
          <button
            className="about-btn block sm:hidden flex items-center justify-center bg-blue-600 text-white rounded-full p-2 mt-4 mx-auto z-50  cursor-pointer hover:bg-blue-700 transition-colors duration-300"
            onClick={() => {
              console.log("navigating to about from small screen button...");
              navigate("/about");
            }}
          >
            {/* Icon (using an SVG for an info circle) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 34"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M12 18.5a6.5 6.1 0 110-13 6.5 6.5 0 010 13z"
              />
            </svg>
            <span className="ml-2">About</span>
          </button>

          {/* Intro Scroll Message */}
          <b className="intro__scroll block mt-4 text-center px-4">
            Your Growth Our Mission - Let's Launch Your Business to New Heights!
            <br />
            <br />
            <span className="block">Scroll to begin the journey</span>
          </b>

          {/* Start Button */}
          <button
            className="explore bg-white mt-6 px-4 py-2 rounded shadow hover:shadow-lg transition-all duration-300 block mx-auto"
            onClick={() => {
              setPlay(true);
            }}
          >
            Start Your Journey Today!
          </button>
        </div>
      )}

      {/* Outro Section */}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text text-center px-4">
          Wish you had a great Services with us... Reload to explore again
        </p>
      </div>
    </div>
  );
};
