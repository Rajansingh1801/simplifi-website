import React, { useState } from "react";
import body from "../../assets/images/bodysection/body.png";
import "./style.css";
import "./bodypart.css";

const Bodypart = () => {
  const [isHoveredhead, setIsHoveredhead] = useState(false);
  const [isHoveredeye, setIsHoveredeye] = useState(false);
  const [isHoveredjoint, setIsHoveredjoint] = useState(false);
  const [isHoveredheart, setIsHoveredheart] = useState(false);
  const [isHoveredgut, setIsHoveredgut] = useState(false);
  const [isHoveredenergy, setIsHoveredenergy] = useState(false);

  //for head
  const handleMouseEnterhead = () => {
    setIsHoveredhead(true);
  };
  const handleMouseLeavehead = () => {
    setIsHoveredhead(false);
  };

  //for eye
  const handleMouseEntereye = () => {
    setIsHoveredeye(true);
  };
  const handleMouseLeaveeye = () => {
    setIsHoveredeye(false);
  };
  //joint
  const handleMouseEnterjoint = () => {
    setIsHoveredjoint(true);
  };
  const handleMouseLeavejoint = () => {
    setIsHoveredjoint(false);
  };
  //heart
  const handleMouseEnterheart = () => {
    setIsHoveredheart(true);
  };
  const handleMouseLeaveheart = () => {
    setIsHoveredheart(false);
  };
  //gut
  const handleMouseEntergut = () => {
    setIsHoveredgut(true);
  };
  const handleMouseLeavegut = () => {
    setIsHoveredgut(false);
  };
  //energy
  const handleMouseEnterenergy = () => {
    setIsHoveredenergy(true);
  };
  const handleMouseLeaveenergy = () => {
    setIsHoveredenergy(false);
  };

  return (
    <>
      <section className="bodypart py-5">
        <div className="d-flex align-items-end justify-content-between">
          <div className="text-part ">
            <div
              className="cont headpart"
              onMouseEnter={handleMouseEnterhead}
              onMouseLeave={handleMouseLeavehead}
            >
              <h6>Enhanched Congnitive Function</h6>
              <p>Experience mental clarity with TeaCrine.</p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEntereye}
              onMouseLeave={handleMouseLeaveeye}
            >
              <h6>Vision Support:</h6>
              <p>
                Lutemax® supports eye health for those frequent screen-time
                days.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont "
              onMouseEnter={handleMouseEnterheart}
              onMouseLeave={handleMouseLeaveheart}
            >
              <h6>Cell Revitalization:</h6>
              <p>
                Support heart health and energy production with Co-Q10 and
                N-Acetyl Cysteine.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEntergut}
              onMouseLeave={handleMouseLeavegut}
            >
              <h6>Gut Health:</h6>
              <p>
                Achieve a healthier gut with 5-HTF and Organic Pre-biotic Fiber.
              </p>
            </div>
          </div>
          <div className="imgcont ">
            <img src={body} alt="" />

            {isHoveredhead && <div className="tick head"></div>}
            {isHoveredeye && <div className="tick eye"></div>}
            {isHoveredheart && <div className="tick heart"></div>}
            {isHoveredgut && <div className="tick gut"></div>}
            {isHoveredenergy && <div className="tick energy"></div>}

            {isHoveredjoint && (
              <>
                <div className="tick joint1"></div>
                <div className="tick joint2"></div>
                <div className="tick joint3"></div>
                <div className="tick joint4"></div>
                <div className="tick joint5"></div>
                <div className="tick joint6"></div>
                <div className="tick joint7"></div>
                <div className="tick joint8"></div>
              </>
            )}
          </div>
          <div className="text-part ">
            <div
              className="cont"
              onMouseEnter={handleMouseEnterhead}
              onMouseLeave={handleMouseLeavehead}
            >
              <h6>Stress Management:</h6>
              <p>
                Find balance with Relora®, designed to maintain normal stress
                and hormone levels.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEnterenergy}
              onMouseLeave={handleMouseLeaveenergy}
            >
              <h6>Energy and Vitality:</h6>
              <p>
                Gain essential nutrients from Albion™ TRAACS chelated minerals
                and Methylcobalamin.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEntergut}
              onMouseLeave={handleMouseLeavegut}
            >
              <h6>Immune Boost:</h6>
              <p>
                Our blend of Organic Ginger, Organic Super Greens, and Quercetin
                Dihydrat strengthens immunity.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="joint cont"
              onMouseEnter={handleMouseEnterjoint}
              onMouseLeave={handleMouseLeavejoint}
            >
              <h6>Joint Nourishment:</h6>
              <p>
                Experience Curcumin's anti-inflammatory benefits and joint
                support from Quercetin Dihydrate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bodypart-resposive py-md-5">
        <div className="d-flex align-items-md-end align-items-center justify-content-between">
          <div className="text-part">
            <div
              className="cont align-self-start ps-sm-4"
              onMouseEnter={handleMouseEnterhead}
              onMouseLeave={handleMouseLeavehead}
            >
              <h6>Enhanched Congnitive Function</h6>
              <p>Experience mental clarity with TeaCrine.</p>
            </div>
            <div className="borders"></div>
            <div
              className="cont "
              onMouseEnter={handleMouseEntereye}
              onMouseLeave={handleMouseLeaveeye}
            >
              <h6>Vision Support:</h6>
              <p>
                Lutemax® supports eye health for those frequent screen-time
                days.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont "
              onMouseEnter={handleMouseEnterheart}
              onMouseLeave={handleMouseLeaveheart}
            >
              <h6>Cell Revitalization:</h6>
              <p>
                Support heart health and energy production with Co-Q10 and
                N-Acetyl Cysteine.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEntergut}
              onMouseLeave={handleMouseLeavegut}
            >
              <h6>Gut Health:</h6>
              <p>
                Achieve a healthier gut with 5-HTF and Organic Pre-biotic Fiber.
              </p>
            </div>
            <div className="borders"></div>

            <div
              className="cont"
              onMouseEnter={handleMouseEnterhead}
              onMouseLeave={handleMouseLeavehead}
            >
              <h6>Stress Management:</h6>
              <p>
                Find balance with Relora®, designed to maintain normal stress
                and hormone levels.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEnterenergy}
              onMouseLeave={handleMouseLeaveenergy}
            >
              <h6>Energy and Vitality:</h6>
              <p>
                Gain essential nutrients from Albion™ TRAACS chelated minerals
                and Methylcobalamin.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="cont"
              onMouseEnter={handleMouseEntergut}
              onMouseLeave={handleMouseLeavegut}
            >
              <h6>Immune Boost:</h6>
              <p>
                Our blend of Organic Ginger, Organic Super Greens, and Quercetin
                Dihydrat strengthens immunity.
              </p>
            </div>
            <div className="borders"></div>
            <div
              className="joint cont"
              onMouseEnter={handleMouseEnterjoint}
              onMouseLeave={handleMouseLeavejoint}
            >
              <h6>Joint Nourishment:</h6>
              <p>
                Experience Curcumin's anti-inflammatory benefits and joint
                support from Quercetin Dihydrate.
              </p>
            </div>
          </div>

          <div className="imgcont m-auto">
            <img src={body} alt="" />

            {isHoveredhead && <div className="tick head"></div>}
            {isHoveredeye && <div className="tick eye"></div>}
            {isHoveredheart && <div className="tick heart"></div>}
            {isHoveredgut && <div className="tick gut"></div>}
            {isHoveredenergy && <div className="tick energy"></div>}

            {isHoveredjoint && (
              <>
                <div className="tick joint1"></div>
                <div className="tick joint2"></div>
                <div className="tick joint3"></div>
                <div className="tick joint4"></div>
                <div className="tick joint5"></div>
                <div className="tick joint6"></div>
                <div className="tick joint7"></div>
                <div className="tick joint8"></div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bodypart;
