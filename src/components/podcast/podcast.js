import React from "react";
import "./style.css";
import person from "../../assets/images/podcast/person.png";
import spotify from "../../assets/images/podcast/spotify.png";
import apple from "../../assets/images/podcast/apple.png";
import google from "../../assets/images/podcast/googlepd.png";
import songimg from "../../assets/images/podcast/track1.png";
import AudioPlayer from "../audioplayer/Audio";
// import Song from "https://everguardimage.s3.amazonaws.com/audio/1701768383318.mp3";

function Podcast() {
  return (
    <>
      <section className="podcast">
        <div className="mainsection">
          <div className="row h-100">
            <div className="col-6 content">
              <div>
                <div className="d-flex align-items-center">
                  <div className="vline me-2"></div>
                  <div>
                    <h5 className="mb-0">Trending Epsodes</h5>
                  </div>
                </div>
                <h2>Podcast Episodes</h2>
                <p>
                  The Simplifi Podcast helps you live your best life possible.
                  It features expert interviews, health tips and more.
                </p>
                <AudioPlayer audioSrc="https://everguardimage.s3.amazonaws.com/audio/1701768383318.mp3" />

                <div className="d-flex align-items-center my-3">
                  <div>
                    <h5 className="mb-0 me-2">Listen On Also</h5>
                  </div>
                  <div className="vline"></div>
                </div>
                <div className="my-2">
                  <img src={spotify} alt="" className="my-1" />
                  <img src={apple} alt="" className="my-1 mx-2" />
                  <img src={google} alt="" className="my-1" />
                </div>
              </div>
            </div>
            <div className="col-6 text-end">
              <img src={person} alt="" className="person-img" />
            </div>
          </div>
        </div>
        <div className="list">
          <div className="container">
            <h3>Latest Podcast Episodes</h3>
            <div className="cards">
              <div>
                <img src={songimg} alt="" className="playimg" />
              </div>
              <div className="ps-4">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  et!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  placeat neque molestias! Laudantium soluta reiciendis fuga,
                  alias error. Dolores repudiandae doloribus voluptatem?
                </p>
                <AudioPlayer />
              </div>
            </div>
            <div className="cards">
              <div>
                <img src={songimg} alt="" className="playimg" />
              </div>
              <div className="ps-4">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  et!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  placeat neque molestias! Laudantium soluta reiciendis fuga,
                  alias error. Dolores repudiandae doloribus voluptatem?
                </p>
                <AudioPlayer />
              </div>
            </div>
            <div className="cards">
              <div>
                <img src={songimg} alt="" className="playimg" />
              </div>
              <div className="ps-4">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  et!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  placeat neque molestias! Laudantium soluta reiciendis fuga,
                  alias error. Dolores repudiandae doloribus voluptatem?
                </p>
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Podcast;
