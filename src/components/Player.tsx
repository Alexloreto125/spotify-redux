import next from "../assets/img/next.png";
import prev from "../assets/img/prev.png";
import shuffle from "../assets/img/shuffle.png";
import play from "../assets/img/play.png";
import repeat from "../assets/img/repeat.png";
import pause from "../assets/img/Pause_button.svg";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "./Hooks";
import { Button } from "react-bootstrap";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const currentTrackPreviewUrl = useSelector(
    (state) => state.music.currentTrackPreviewUrl
  );

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    audioRef.current.src = currentTrackPreviewUrl;
    audioRef.current.load();
    audioRef.current.addEventListener("error", (event) => {
      console.error("Error during playback:", event);
    });
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    return () => {
      audioRef.current.removeEventListener("error", (event) => {
        console.error("Error during playback:", event);
      });
    };
  }, [currentTrackPreviewUrl, isPlaying]);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#" onClick={playPauseHandler}>
                  <img src={isPlaying ? pause : play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
