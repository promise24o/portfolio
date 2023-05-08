import { useState, useEffect, useRef } from "react";
import audio from "../../public/audio/audio.mp3";

const SoundBar: React.FC = () => {
  const soundBarEl = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && soundBarEl.current) soundBarEl.current.play();
    else if (soundBarEl.current) soundBarEl.current.pause();
  };

  useEffect(() => {
    const soundBars = document.querySelector(".soundBars") as HTMLElement;
    if (soundBars) {
      soundBars.onclick = function () {
        soundBars.classList.toggle("play");
      };
    }
  }, []);
  
  return (
    <div
      className="soundBars link absolute top-3 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <audio ref={soundBarEl} src={audio} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
