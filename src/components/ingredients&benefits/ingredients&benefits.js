import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import bg from "../../assets/images/img/bg.png";
import none from "../../assets/images/ingredient/none.png";
import ntwo from "../../assets/images/ingredient/ntwo.png";
import nthree from "../../assets/images/ingredient/nthree.png";
import nfour from "../../assets/images/ingredient/nfour.png";
import nfive from "../../assets/images/ingredient/nfive.png";

import aone from "../../assets/images/ingredient/aone.png";
import atwo from "../../assets/images/ingredient/atwo.png";
import athree from "../../assets/images/ingredient/athree.png";
import afour from "../../assets/images/ingredient/afour.png";
import afive from "../../assets/images/ingredient/afive.png";

function Ingredients_benefits() {
  const [midS, setMidS] = useState(2);

  const [sTrans, setSTrans] = useState([
    [0, -210],
    [145, -150],
    [210, 0],
    [150, 145],
    [0, 210],
  ]);

  const handleChange = (n = 1) => {
    setSTrans((prevSTrans) => {
      const newStrans = [...prevSTrans];

      for (let i = 0; i < n; i++) {
        newStrans.push(newStrans.shift());
      }

      return [...newStrans];
    });

    setMidS((prevMidS) => {
      let newMidS = prevMidS;

      for (let i = 0; i < n; i++) {
        newMidS = newMidS - 1 < 0 ? 4 : Math.abs(newMidS - 1);
      }

      return newMidS;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="ingredient">
        <div className="sliders">
          <div className="d-flex justify-content-center align-items-center">
            <div className="">
              <div className="first_circle">
                <div className="second_circle">
                  <div className="three_circle" onClick={() => handleChange()}>
                    <h2 className={"" + (midS === 0 ? " active" : "d-none")}>
                      dry free <br /> probiotics
                    </h2>
                    <h2 className={"" + (midS === 1 ? " active" : "d-none")}>
                      Superfood <br /> complex
                    </h2>
                    <h2 className={"" + (midS === 2 ? " active" : "d-none")}>
                      Vitamins <br /> and Minerals
                    </h2>
                    <h2 className={"" + (midS === 3 ? " active" : "d-none")}>
                      plant <br /> Extracts and <br /> antioxidants
                    </h2>
                    <h2 className={"" + (midS === 4 ? " active" : "d-none")}>
                      Enzyme and <br /> mushroom <br /> complex
                    </h2>
                    <div
                      className={"one content" + (midS === 0 ? " active" : "")}
                      style={{
                        transform: `translate(${sTrans[0][0]}px, ${sTrans[0][1]}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(midS);
                      }}
                    >
                      <img src={none} alt="" />
                    </div>
                    <div
                      className={"two content" + (midS === 1 ? " active" : "")}
                      style={{
                        transform: `translate(${sTrans[1][0]}px, ${sTrans[1][1]}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(midS - 1 < 0 ? midS + 5 - 1 : midS - 1);
                      }}
                    >
                      <img src={ntwo} alt="" />
                    </div>
                    <div
                      className={
                        "three content" + (midS === 2 ? " active" : "")
                      }
                      style={{
                        transform: `translate(${sTrans[2][0]}px, ${sTrans[2][1]}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(midS - 2 < 0 ? midS + 5 - 2 : midS - 2);
                      }}
                    >
                      <img src={nthree} alt="" />
                    </div>
                    <div
                      className={"four content" + (midS === 3 ? " active" : "")}
                      style={{
                        transform: `translate(${sTrans[3][0]}px, ${sTrans[3][1]}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(midS - 3 < 0 ? midS + 5 - 3 : midS - 3);
                      }}
                    >
                      <img src={nfour} alt="" />
                    </div>
                    <div
                      className={"five content" + (midS === 4 ? " active" : "")}
                      style={{
                        transform: `translate(${sTrans[4][0]}px, ${sTrans[4][1]}px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(midS - 4 < 0 ? midS + 5 - 4 : midS - 4);
                      }}
                    >
                      <img src={nfive} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <div className={"" + (midS === 0 ? " active" : "d-none")}>
                <div className="contentbody">
                  <h4>learn more about whats's inside simplifi 1</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta id voluptates quia harum debitis veniam quos
                    unde error quaerat numquam atque minima obcaecati nulla
                    doloribus earum optio quae sed, quisquam molestias nam hic
                    ut facilis quibusdam! Repudiandae, rerum molestiae.
                  </p>
                </div>
              </div>

              <div className={"" + (midS === 1 ? " active" : "d-none")}>
                <div className="contentbody">
                  <h4>learn more about whats's inside simplifi 2</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta id voluptates quia harum debitis veniam quos
                    unde error quaerat numquam atque minima obcaecati nulla
                    doloribus earum optio quae sed, quisquam molestias nam hic
                    ut facilis quibusdam! Repudiandae, rerum molestiae.
                  </p>
                </div>
              </div>

              <div className={"" + (midS === 2 ? " active" : "d-none")}>
                <div className="contentbody">
                  <h4>learn more about whats's inside simplifi 3</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta id voluptates quia harum debitis veniam quos
                    unde error quaerat numquam atque minima obcaecati nulla
                    doloribus earum optio quae sed, quisquam molestias nam hic
                    ut facilis quibusdam! Repudiandae, rerum molestiae.
                  </p>
                </div>
              </div>

              <div className={"" + (midS === 3 ? " active" : "d-none")}>
                <div className="contentbody">
                  <h4>learn more about whats's inside simplifi 4</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta id voluptates quia harum debitis veniam quos
                    unde error quaerat numquam atque minima obcaecati nulla
                    doloribus earum optio quae sed, quisquam molestias nam hic
                    ut facilis quibusdam! Repudiandae, rerum molestiae.
                  </p>
                </div>
              </div>

              <div className={"" + (midS === 4 ? " active" : "d-none")}>
                <div className="contentbody">
                  <h4>learn more about whats's inside simplifi 5</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta id voluptates quia harum debitis veniam quos
                    unde error quaerat numquam atque minima obcaecati nulla
                    doloribus earum optio quae sed, quisquam molestias nam hic
                    ut facilis quibusdam! Repudiandae, rerum molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabpart container">
          <Tabs
            defaultActiveKey="TeaCrine®"
            id="uncontrolled-tab-example"
            className=""
          >
            <Tab eventKey="TeaCrine®" title="TeaCrine®">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              recusandae iste iusto temporibus sed, rerum sint adipisci nihil
              labore voluptatibus, nesciunt, aperiam consequuntur similique
              distinctio atque fugiat quam cupiditate optio! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
            <Tab eventKey="Lutemax®" title="Lutemax®">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem harum commodi a voluptatibus repellendus molestias
              incidunt! Optio voluptatibus sequi praesentium, neque tempore
              corrupti. Officia, ullam.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
            <Tab eventKey="Relora®" title="Relora®">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus facilis consectetur quibusdam harum explicabo odio
              voluptas quasi. Earum distinctio voluptate, nam eaque dolores
              explicabo unde.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
            <Tab eventKey="5-HTF" title="5-HTF">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus facilis consectetur quibusdam harum explicabo odio
              voluptas quasi. Earum distinctio voluptate, nam eaque dolores
              explicabo unde.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
            <Tab eventKey="Methylcobalamin" title="Methylcobalamin">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus facilis consectetur quibusdam harum explicabo odio
              voluptas quasi. Earum distinctio voluptate, nam eaque dolores
              explicabo unde.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
            <Tab eventKey="Albion™ TRAACS" title="Albion™ TRAACS">
              <div className="dropdowns">
                <select name="" id="">
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                  <option value="one">one</option>
                </select>
              </div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus facilis consectetur quibusdam harum explicabo odio
              voluptas quasi. Earum distinctio voluptate, nam eaque dolores
              explicabo unde.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aspernatur ullam at suscipit quibusdam quos repudiandae maxime
              sed, dolore laudantium!
            </Tab>
          </Tabs>
        </div>
        <div className="lastsection">
          <div className="imgcont">
            <div className="">
              <img src={bg} alt="" />
            </div>
            <div className="content container">
              <div className="row h-100">
                <div className="col-6"></div>
                <div className="col-6 text-center d-flex align-items-center">
                  <div>
                    <h3>
                      Complete Nutrition <br /> In Every Scoop
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Condimentum lorem
                      a nulla fermentum phasellus neque. Et diam dui ullamcorper
                      vitae.
                    </p>
                    <div className="d-flex justify-content-center mt-5">
                      <button className="button1">Full Nutrition Table</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ingredients_benefits;
