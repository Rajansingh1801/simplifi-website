import React, { useState, useRef } from "react";
import styled from "styled-components";
import play from "../../assets/images/podcast/play.svg";
import volumeimg from "../../assets/images/podcast/volume.svg";
import downlaod from "../../assets/images/podcast/download.svg";
import pause from "../../assets/images/podcast/pause.svg";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // 1 is full volume
  const audioRef = useRef(null);

  const [isShow, setIsShow] = useState(false);
  const volumeclick = () => {
    setIsShow(!isShow);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioSrc;
    link.download = "audio-file.mp3";
    link.click();
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="d-flex align-items-center my-4">
        <div onClick={togglePlayPause} className="me-3">
          {isPlaying ? (
            <>
              <img src={pause} className="playbtn" />
            </>
          ) : (
            <>
              <img src={play} className="playbtn" />
            </>
          )}
        </div>
        <div className="me-2 text-orange">{`${formatTime(
          Math.floor(currentTime)
        )}`}</div>
        <div className="tracktime">
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSeek}
          />
        </div>

        <div className="mx-2 text-orange">{` ${formatTime(
          Math.floor(duration)
        )}`}</div>

        <div>
          <img
            src={volumeimg}
            alt=""
            className="mx-3 volume"
            onClick={() => volumeclick()}
          />
        </div>
        {isShow == true ? (
          <input
            type="range"
            value={volume}
            max={1}
            step={0.1}
            onChange={handleVolumeChange}
          />
        ) : null}
        {/* <div>Volume: {Math.round(volume * 100)}%</div> */}
        <div>
          <img onClick={handleDownload} className="volume" src={downlaod} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
