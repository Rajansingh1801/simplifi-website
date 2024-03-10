import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import HomeBg from "../../images/CarrotImages/CarrotBgWithGreen.png";
import HomeBgDot from "../../images/CarrotImages/CarrotDot.png";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  /* margin-top: -80px; */
  height: ${({ IsSignup }) => (IsSignup ? "105vh" : "100vh")};

  position: relative;
  z-index: 1;
  border: none;

  /* add :before styles */
  :before {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    padding: 0rem 1rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0rem 0.5rem;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${HomeBg}) no-repeat center center / cover;
  background-position-x: left;
  background-position-y: bottom;
`;
export const ImgBgDot = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${HomeBgDot}) no-repeat center center / cover;
  background-position-x: center;
  background-position-y: -15rem;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1100px;
  height: 100%;
  /* position: absolute; */
  padding: 0.5em 1.8em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 580px) {
    padding: 0.5em 0.8em;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5em 0.8em;
  }

  @media screen and (max-width: 420px) {
    padding: 0.5rem 0rem;
  }
`;

export const HeroH1 = styled.h1`
  position: relative;
  color: #f1f1f1;
  font-family: "Titan One";
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 0.1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0rem;

  @media screen and (max-width: 768px) {
    font-size: 1.7em;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0rem 0rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 1rem;
    padding: 0rem 0rem;
  }
`;

export const HeroP = styled.div`
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  font-family: "Visby Round CF";
  color: #101011;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    margin-top: 0.6em;
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 280px) {
    margin-top: 0rem;
    font-size: 0.7em;
  }
`;

export const NavBtnLink = styled(LinkR)`
  margin: 0.4em;
  border-radius: 4px;
  white-space: nowrap;
  padding: 0.64em 1em;
  color: ${(props) => (props.primary ? "#F1F1F1" : "#F1F1F1")};
  background: ${(props) => (props.primary ? "transparent" : "#FF4001")};
  border: 1px solid ${(props) => (props.primary ? "#FFFFFF" : "#FF4001")};
  font-size: 1em;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => (props.primary ? "transparent" : "#FF4001")};
    color: ${(props) => (props.primary ? "FFFFFF" : "#FFFFFF")};
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 1.6em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:hover {
    color: red;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ChairSvg = styled.img`
  z-index: 999;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const ChairSvgSection = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  bottom: 0px;
  width: 100%;
`;
export const ChairGuy = styled.img`
  position: absolute;
  bottom: 7vh;
  left: 8%;

  @media screen and (max-width: 1200px) {
    bottom: 6vh;
    left: 3%;
  }

  @media screen and (max-width: 768px) {
    bottom: 6vh;
    left: 2%;
    width: 220px;
  }
  @media screen and (max-width: 620px) {
    bottom: 6vh;
    left: 0.5%;
    width: 150px;
  }
  @media screen and (max-width: 480px) {
    bottom: 6vh;
    left: 0.5%;
    width: 130px;
  }
  @media screen and (max-width: 380px) {
    bottom: 6vh;
    width: 90px;
  }
  @media screen and (max-width: 280px) {
    bottom: 6vh;
    width: 85px;
  }
`;
export const ChairBottom = styled.img`
  width: 100%;
`;
export const SignWelcome = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const SignInSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WelcomeSection = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  padding: ${({ IsSignup }) =>
    IsSignup ? "1rem 9rem 3rem 9rem" : "1rem 9rem 6rem 9rem"};

  @media screen and (max-width: 920px) {
    padding: ${({ IsSignup }) =>
      IsSignup ? "1rem 6rem 3rem 6rem" : "1rem 4rem 4rem 4rem"};
  }

  @media screen and (max-width: 768px) {
    padding: ${({ IsSignup }) =>
      IsSignup ? "1rem 4rem 3rem 4rem" : "1rem 4rem 4rem 4rem"};
  }

  @media screen and (max-width: 620px) {
    padding: ${({ IsSignup }) =>
      IsSignup ? "1rem 2rem 3rem 2rem" : "1rem 2rem 4rem 2rem"};
  }
  @media screen and (max-width: 520px) {
    padding: ${({ IsSignup }) =>
      IsSignup ? "1rem 0rem 3rem 0rem" : "1rem 0rem 4rem 0rem"};
  }
`;
export const PlanCardsSection = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 2rem 5rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1000px) {
    padding: 2rem 2rem 2rem 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0rem 2rem 0rem;
  }
  @media screen and (max-width: 520px) {
    padding: 0rem 0rem 0rem 0rem;
  }
`;
export const WelcomeDesign = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
`;

export const TrapeziumLeft = styled.div`
  width: 50%;
  background: #ffffff;
  transform: skewX(2deg);
  border-left: 1px solid #fd973a;
  border-top: 1px solid #fd973a;
  border-bottom: 1px solid #fd973a;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  translate: 18px;
  position: relative;
  /* box-shadow: 0px 0px 30px rgba(228, 62, 15, 0.1); */
`;
export const LeftSectionDot = styled.img`
  position: absolute;
  top: 3rem;
  left: -0.75rem;
`;
export const RightSectionInsideDot = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 5rem;
`;
export const RightSectionOutsideDot = styled.img`
  position: absolute;
  top: 8rem;
  right: -5rem;
  @media screen and (max-width: 520px) {
    display: none;
  }
`;
export const RightSectionDotOutBig = styled.img`
  position: absolute;
  top: -5rem;
  right: -5rem;
  @media screen and (max-width: 520px) {
    display: none;
  }
`;
export const LeftSectionOutsideDot = styled.img`
  position: absolute;
  top: 5rem;
  left: -7rem;
`;
export const LeftSectionUpperDot = styled.img`
  position: absolute;
  top: -3.5rem;
  right: 7rem;
`;
export const TrapeziumRight = styled.div`
  width: 50%;
  background: #ffffff;
  transform: skewX(-2deg);
  border-right: 1px solid #fd973a;
  border-top: 1px solid #fd973a;
  border-bottom: 1px solid #fd973a;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  translate: -18px;
  position: relative;
  /* box-shadow: 0px 0px 30px rgba(228, 62, 15, 0.1); */
`;
export const TrapeziumContent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  bottom: 0rem;
  right: 0rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
  @media screen and (max-width: 280px) {
    padding: 0.5rem;
  }
`;
export const WelcomeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;

  font-weight: 400;
  font-size: 1.25rem;
  font-family: "Titan One";
  line-height: 25px;
  text-align: center;
  text-decoration-line: underline;

  color: #101011;
  @media screen and (max-width: 480px) {
    padding-top: 0.5rem;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.85rem;
  }
`;
export const EmailPswdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  @media screen and (max-width: 660px) {
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0.5rem 1rem;
  }
`;
export const DontHaveRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 280px) {
    padding-bottom: 0.5rem;
  }
`;
export const DontHave = styled.div`
  font-family: "Visby Round CF";
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.6rem;
  }
`;
export const SignupText = styled.div`
  font-family: "Visby Round CF";
  font-weight: bold;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.6rem;
  }
`;
export const LabelInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  @media screen and (max-width: 420px) {
    padding-bottom: 0.5rem;
  }
`;
export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  padding-bottom: 1rem;
  font-family: "Visby Round CF";
  font-weight: 600;
  font-size: 1.025rem;
  line-height: 22px;
  color: #101011;

  @media screen and (max-width: 420px) {
    padding-bottom: 0.5rem;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 380px) {
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 0.7rem;
    padding-bottom: 0.25rem;
  }
`;
export const CarrotInput = styled.input``;
export const ForgotRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
  padding: 1rem 0rem 2rem 0rem;

  @media screen and (max-width: 420px) {
    padding: 0.25rem 0rem 0.5rem 0rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0.25rem 0rem 0.25rem 0rem;
  }
`;
export const ForgotText = styled.div`
  cursor: pointer;

  font-family: "Visby Round CF";
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-decoration-line: underline;
  color: #e43f0f;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 0.75rem;
  }
`;
export const ResendOtp = styled.div`
  display: -webkit-inline-box;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 1rem 0rem 2rem 0rem;
  cursor: pointer;

  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 22px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.85rem;
  }
`;
export const ResendOtpText = styled.div`
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.85rem;
  }
`;
export const CarrotButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: ${({ IsSignup }) => (IsSignup ? "0.5rem 0rem" : "1rem 0rem")};

  @media screen and (max-width: 420px) {
    padding: ${({ IsSignup }) => (IsSignup ? "0.25rem 0rem" : "1rem 0rem")};
  }
`;
export const CarrotButton = styled.button`
  background: linear-gradient(
    103.5deg,
    #666666 33.17%,
    #ffffff 67.69%,
    #808080 105.27%
  );
  margin: 0rem;
  white-space: nowrap;
  cursor: pointer;
  position: relative;

  border-radius: 12px;
  padding: 1.35rem 4rem;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease-in-out;

  @media screen and (max-width: 420px) {
    padding: 1rem 3rem;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
export const PointRowDotButton = styled.button`
  background: linear-gradient(255.29deg, #e43f0f 8.23%, #fd973a 92.9%);
  margin: 0rem;
  white-space: nowrap;
  cursor: pointer;
  position: relative;

  border-radius: 50%;
  margin-right: 1.5rem;
  cursor: pointer;
  border: none;
  padding: 0.25rem;
`;
export const ButtonInside = styled.div`
  background: linear-gradient(89.72deg, #28c54e 0.28%, #a1f68b 99.85%);
  margin: 0rem;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;

  border-radius: 12px;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  bottom: 0rem;
  margin: 2px;
  padding: 0rem;

  border: 2px solid #101011;
  font-family: "Visby Round CF";
  font-weight: 700;
  color: #ffffff;
  font-size: 0.9rem;
  text-align: center;
  position: absolute;

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;
export const TermsConditionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0rem;
`;
export const TermsCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const TermsLabelRow = styled.div`
  display: -webkit-inline-box;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 480px) {
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 280px) {
    padding-left: 0.25rem;
  }
`;
export const LabelDull = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: #101011;

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 660px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 0.65rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
export const LabelDark = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 22px;
  color: #101011;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 660px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 0.65rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
export const HandCarrotSvg = styled.img`
  position: absolute;
  bottom: 5rem;
  right: -11.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ProfilePicture = styled.div`
  position: absolute;
  top: -5rem;
`;

export const ImageEditButton = styled.div`
  filter: drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.15));
  background: linear-gradient(255.29deg, #e43f0f 8.23%, #fd973a 92.9%);
  margin: 0rem;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 0.15rem;

  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
`;
export const WhiteButton = styled.div`
  background: #ffffff;
  margin: 0rem;
  white-space: nowrap;
  cursor: pointer;
  position: absolute;

  border-radius: 50%;
  padding: 0.5rem;
  display: flex;

  /* width: 48px;
    height: 48px; */
  cursor: pointer;
  border: none;
  transition: all 0.15s ease-in-out;
  font-size: 1.2rem;
  position: relative;
`;
export const AllPlanCards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5rem;
  }
`;
export const PlanCard = styled.div`
  width: 100%;
  border: 1px solid #e43f0f;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  position: relative;
`;
export const CardHeadingRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CardPointsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0rem 1rem 0rem;
  border-bottom: ${({ type }) => (type === "free" ? "" : "1px solid #E43F0F")};
`;
export const CardPointRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 0rem;
`;
export const BuySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const CardHeading = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 900;
  font-size: 2rem;
  line-height: 48px;
  text-align: center;
  color: #101011;
  text-transform: capitalize;
  background: ${({ type }) =>
    type === "orange"
      ? "#FD973A"
      : type === "gold"
      ? "-webkit-linear-gradient(#E4B50F, #FFDE89)"
      : type === "Platinum"
      ? "-webkit-linear-gradient(#8D8D8D, #B5B5B5, #B2B2B2, #A8A8A8)"
      : "-webkit-linear-gradient(#101011, #101011)"};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
export const CardPoint = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #101011;
`;
export const CardPrice = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 24px;
  text-align: center;
  color: #101011;
  padding: 1rem 0rem;
`;
export const LottieDiv = styled.div`
  height: 165px;
  width: 175px;
  position: absolute;
  right: -5.5rem;
  top: -3.5rem;

  @media screen and (max-width: 620px) {
    height: 132px;
    width: 138px;
    right: -4.4em;
    top: -2.8rem;
  }

  @media screen and (max-width: 580px) {
    height: 83px;
    width: 89px;
    right: -2.2rem;
    top: -1.6rem;
  }

  @media screen and (max-width: 520px) {
    height: 83px;
    width: 89px;
    right: -1.6rem;
    top: -1.6rem;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const LottieDivMobile = styled.img`
  display: none;

  @media screen and (max-width: 420px) {
    display: flex;
    height: 33px;
    width: 40px;
    position: absolute;
    right: 0rem;
    top: -0.6rem;
  }
`;
export const LottieGreenForgot = styled.div`
  height: 300px;
  width: 175px;
  position: absolute;
  bottom: 4vh;
  left: 13%;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 175px;
    bottom: 4vh;
    left: 8%;
  }

  @media screen and (max-width: 620px) {
    height: 220px;
    width: 140px;
    bottom: 4vh;
    left: 6%;
  }

  @media screen and (max-width: 520px) {
    height: 170px;
    width: 100px;
    bottom: 3vh;
    left: 4%;
  }
`;
export const LottieManThink = styled.div`
  height: 380px;
  width: 350px;
  position: absolute;
  bottom: 0rem;
  right: 8%;

  @media screen and (max-width: 1200px) {
    right: 0%;
  }

  @media screen and (max-width: 768px) {
    height: 280px;
    width: 300px;
  }

  @media screen and (max-width: 620px) {
    height: 220px;
    width: 200px;
  }

  @media screen and (max-width: 520px) {
    height: 200px;
    width: 180px;
  }
`;
export const LottieResetLock = styled.div`
  height: 300px;
  width: 175px;
  position: absolute;
  bottom: 5%;
  left: 16%;
  transform: rotate(-20deg);

  @media screen and (max-width: 1200px) {
    left: 12%;
  }

  @media screen and (max-width: 768px) {
    left: 4%;
  }

  @media screen and (max-width: 520px) {
    height: 230px;
    width: 180px;
  }
`;
export const LottieForgotSecurity = styled.div`
  height: 350px;
  width: 325px;
  position: absolute;
  bottom: 8vh;
  left: 6%;

  @media screen and (max-width: 1200px) {
    height: 270px;
    width: 260px;
    left: 4%;
    bottom: 7vh;
  }

  @media screen and (max-width: 1000px) {
    height: 240px;
    width: 230px;
    left: 2%;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 210px;
    left: 2%;
  }

  @media screen and (max-width: 620px) {
    height: 170px;
    width: 160px;
  }

  @media screen and (max-width: 520px) {
    height: 150px;
    width: 140px;
  }

  @media screen and (max-width: 480px) {
    height: 130px;
    width: 120px;
  }
  @media screen and (max-width: 380px) {
    height: 100px;
    width: 90px;
  }
  @media screen and (max-width: 280px) {
    height: 90px;
    width: 80px;
  }
`;
export const FreeImage = styled.img`
  margin-bottom: -10px;
`;
export const WrapSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
export const PurchasedSvg = styled.img`
  width: 200px;
  height: 50px;
`;

export const NewHeroP = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  font-family: "Visby Round CF";
  color: #101011;

  @media screen and (max-width: 768px) {
    margin-top: 0.6em;
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 280px) {
    margin-top: 0rem;
    font-size: 0.7em;
  }
`;
