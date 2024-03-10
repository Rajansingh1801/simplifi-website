import styled from "styled-components";
import HomeBgDot from "../../../images/CarrotSvg/Associate_MemberBg.png";
import HomeBgDotNew from "../../../images/CarrotImages/CarrotDot.png";
export const ImgBgDot = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${HomeBgDot}) no-repeat center center / cover;
  background-position-x: center;
  background-position-y: 80px;
`;

export const ImgBgDotPay = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${HomeBgDotNew}) no-repeat center center / cover;
  background-position-x: left;
  background-position-y: -12rem;
`;

export const UpperSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  width: 60%;
`;
export const UpperSectionForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  position: relative;
`;
export const LearnMoreButtonRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;
export const LowerSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const UpperSectionCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(228, 62, 15, 0.1);
  border-radius: 30px;
  border: 1px solid #e43f0f;
  position: relative;
  width: 100%;

  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
  padding: 2.5rem;
`;
export const UpperSectionCardForm = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(228, 62, 15, 0.1);
  border-radius: 30px;
  border: 1px solid #e43f0f;
  position: relative;
  width: 70%;

  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
  padding: 2.5rem;
`;
export const CarrotAssociateDiv = styled.img`
  position: absolute;
  bottom: -2rem;
  right: -6rem;
  width: 130px;
  height: 170px;
`;
export const VideoSectionAssoiate = styled.div`
  width: 50%;
  border-radius: 15px;
`;
export const ParagraphAssociate = styled.div`
  padding-left: 1.5rem;
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
`;
export const BusinessFormCarrot = styled.img`
  position: absolute;
  left: 5rem;
  bottom: 25%;
`;
export const AssociateFormCarrot = styled.img`
  position: absolute;
  left: 5rem;
  bottom: 0rem;
`;

export const PurchaseSubRow = styled.div`
  position: absolute;
  top: 80px;
  right: 0rem;
  left: 0rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 99;
  background: linear-gradient(255deg, #e4b50f4a 0%, #ffde8963 100%);
`;

export const PurchaseText = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #101011;
  margin-right: 1rem;
`;
export const PurchaseButton = styled.button`
  border: none;
  color: #ffffff;
  text-align: center;
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 22px;
  text-align: center;
  background: #101011;
  border-radius: 40px;
  padding: 0.25rem 1rem;
  cursor: pointer;
`;

export const AllPlanCards = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightTick = styled.img`
  position: absolute;
  top: -3rem;
  width: 100px;
  height: 100px;
`;

export const CongratulationHeading = styled.div`
  padding-top: 2rem;
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  color: #101011;
  background: ${({ type }) =>
    type === "orange"
      ? "linear-gradient(255.29deg,#E43F0F 8.23%,#FD973A 92.9%)"
      : type === "gold"
      ? "-webkit-linear-gradient(#E4B50F, #FFDE89)"
      : type === "Platinum"
      ? "-webkit-linear-gradient(#8D8D8D, #B5B5B5, #B2B2B2, #A8A8A8)"
      : "-webkit-linear-gradient(#101011, #101011)"};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const LottieDiv = styled.div`
  height: 165px;
  width: 175px;
  margin: -3rem 0rem -2rem 0rem;

  @media screen and (max-width: 620px) {
    height: 132px;
    width: 138px;
  }

  @media screen and (max-width: 580px) {
    height: 83px;
    width: 89px;
  }

  @media screen and (max-width: 520px) {
    height: 83px;
    width: 89px;
  }
`;
export const LottieDivContactUs = styled.div`
  position: absolute;
  left: -68px;
  height: 320px;
  width: 200px;

  @media screen and (max-width: 620px) {
    height: 250px;
    width: 120px;
  }
`;

export const CloseIconButton = styled.div`
  position: absolute;
  right: 0.6rem;
  top: 0.5rem;
  padding: 0.2rem 0.5rem;
  box-shadow: 0px 0px 7px rgba(228, 62, 15, 0.2);
  font-size: 0.85rem;
  font-weight: 400;
  background: #ffffff;
  text-align: center;
  color: #101011;
  border-radius: 50%;
  cursor: pointer;
`;
export const BuySubButton = styled.div`
  border-radius: 50px;
  background: linear-gradient(270deg, #e43f0f, #fd973a);
  font-family: "Visby Round CF";
  padding: 0.7rem 3rem;
  font-style: normal;
  color: #ffffff;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  line-height: 17px;
`;
export const AllData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const BuySubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  width: 100%;
`;
export const DullText = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 400;
  padding: 0.5rem 0rem;
  font-size: 1rem;
  line-height: 17px;
  color: #101011;
`;
export const RedText = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 400;
  padding: 0.5rem 0rem;
  font-size: 1rem;
  line-height: 17px;
  color: #101011;
  background: linear-gradient(255.29deg, #e43f0f 8.23%, #fd973a 92.9%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const PlanCard = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;
export const CardPoint = styled.div`
  font-family: "Visby Round CF";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  color: #101011;
`;
export const RightTickThank = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -75px;
  margin-bottom: 0.5rem;
`;
export const BusinessListContainer = styled.div`
  width: 100%;

  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  border: 1px solid #e43f0f;
  padding: 3.5rem 3.5rem 6rem 3.5rem;
  border-radius: 1rem;
  background-color: #fff;
  margin: 1rem 0 1rem 0;
`;

export const BusinessListItem = styled.div`
  display: flex;
  gap: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;

export const BusinessListItemLeft = styled.img`
  width: 72px;
  height: 72px;
  border: 1px solid rgba(228, 63, 15, 0.2);
  border-radius: 1rem;
  align-self: center;
`;
export const BusinessListItemRight = styled.div`
  display: flex;
 
`;
export const BusinessListItemRightData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const BusinessListItemHeading = styled.div`
  color: #000;

  font-family: "Visby Round CF";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const BusinessListItemDescription = styled.div`
  color: #000;

  font-family: "Visby Round CF";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BusinessListItemRightImage = styled.img`
  align-self: flex-end;
`;
export const TermsAndConditionContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1rem 0 0 0 ;
`;
export const TermsAndConditionLabel = styled.label`
 color: #000000;
text-align: center;
font-family: "Visby Round CF";
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const TermsCheckbox =styled.input`
position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
    border-radius:0.2rem;
    border:0.1rem solid black
  }

  // Box hover
  &:hover + label:before {
    background: white;
  }
  
  // Box focus
  &:focus + label:before {
    /* box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12); */
  }

  // Box checked
  &:checked + label:before {
    background:white;
    border:0.1rem solid #f35429;
  }
  
  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 11px;
    background:  #f35429;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0  #f35429,
      4px 0 0  #f35429,
      4px -2px 0  #f35429,
      4px -4px 0  #f35429,
      4px -6px 0  #f35429,
      4px -8px 0  #f35429;
    transform: rotate(45deg);
  }
`;

export const ModalClick = styled.div`
margin-left: 2px;
 color:  #E43F0F;
font-family: "Visby Round CF";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
cursor: pointer;
`;
export const ModalClose = styled.button`
border-radius:50%;
border:none;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
position: absolute;
                  top: -43px;
                  right: -52px;
                  padding:0 0.6rem;
`;
export const FileSize = styled.div`
color: rgb(16, 16, 17);
    font-family: "Visby Round CF";
    font-weight: 500;
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    padding-left: 2rem;
    padding-top: 0.2rem;
`;