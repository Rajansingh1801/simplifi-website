import React, { useEffect, useRef, useState } from "react";
import vid2 from "../../assets/images/videosection/vid.mp4";
import "./style.css";
import bottle from "../../assets/images/videosection/bottle.png";

export default function Videosection() {
  return (
    <div className="videosection">
      <div>
        <video className="videocont" autoPlay loop muted>
          <source
            src="https://everguardimage.s3.amazonaws.com/video/1698922381079.mp3"
            type="video/mp4"
          />
        </video>
        <div className="bottlecont">
          <img src={bottle} alt="Bottle" className="bottleimg" />
        </div>
      </div>
    </div>
  );
}
