import styled from "styled-components";
import PlaneBg from "../../../images/CarrotSvg/PlaneBg.svg";

export const ImgBgDot = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${PlaneBg}) no-repeat center center / cover;
  background-position-x: center;
  background-position-y: 35px;
`

export const UpperSectionCardForm = styled.div`
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
`
export const TermsDataSection = styled.div`
  /* min-height: 300px;
  max-height: 400px;
  overflow-y: scroll; */
  width: 100%;
  padding: 0rem 1rem;
  text-align: left;
  //added
  display:flex;
  justify-content: space-around;
  gap:2rem;
  

  ::-webkit-scrollbar {
        width: 6px !important;    
        height: 6px !important;
        display: flex !important;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: none; 
        border-radius: 10px;
        background: #DDDFE0 !important;
        opacity: 0.4;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        /* background: #BD98FF ; */
        background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%) !important;
        border-radius: 10px !important;
        display: flex !important;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(255deg, #E43F0F99 0%, #FD973A99 100%) !important;
        cursor: pointer !important;
    }


`
export const TermsButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`
export const DeclineButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding: 1rem 4rem;
    background: #FFFFFF;
    border: 1px solid #e43f0f;
    text-align: center;
    font-family: "Visby Round CF";
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 1rem;
`
export const AcceptButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding: 1rem 1.5rem;
    background: #FFFFFF;
    text-align: center;
    font-family: "Visby Round CF";
    font-size: 0.9rem;
    border: none;
    font-style: normal;
    color: #000000;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    background: linear-gradient(83deg, #28C54E 0%, #A1F68B 100%);
`

export const AssociateFormCarrot = styled.img`
  position: absolute;
  left: -5.5rem;
  bottom: -0rem;
  width: 150px;
  height: 150px;
`
export const FaqFormCarrot = styled.img`
  position: absolute;
  left: -110px;
  bottom: -0rem;
  width: 150px;
  height: 150px;
`

export const UpperSectionForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  position: relative;
`

export const FaqCard = styled.div`
  background: ${({ IsOpened }) => (IsOpened ? `#FFFFFF` : '#FFF7EF')};
  box-shadow: 0px 0px 30px rgba(228, 62, 15, 0.1);
  border-radius: 10px;
  border: 1px solid #e43f0f;
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-bottom: 1.5rem;
`
export const FaqCardIcon = styled.div`
  margin-right: 1rem;
`
export const FaqCardData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const FaqCardDataHeading = styled.div`
    color: #101011;
    font-family: "Visby Round CF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const FaqCardDataPara = styled.div`
    padding-top: 1rem;
    color: #101011;
    font-family: "Visby Round CF";
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const StillQuestionsPara = styled.div`
    padding-top: 1rem;
    color: #101011;
    font-family: "Visby Round CF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const StillQuestionHeading = styled.div`
    padding-top: 1rem;
    color: #101011;
    font-family: "Visby Round CF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const StillQuestionsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 0rem;
`
export const StillQuestionImages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const ImageMiddle = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 1;
    border: 2px solid #FFE1D8;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
`
export const ImageLeft = styled.img`
    position: absolute;
    left: -3rem;
    top: 10px;
    z-index: -1;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #FFE1D8;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
`
export const ImageRight = styled.img`
    position: absolute;
    right: -3rem;
    z-index: -1;
    top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #FFE1D8;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.25);
`
export const MiddleImgaes = styled.div`
   position: relative;

`
export const CustomImage = styled.img`
    width:40%;
    height:10% ;
    align-self:center;
  border-radius: 0.5rem;
`

export const OurTeamSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.25fr 1.5fr 1.25fr 1fr;
  /* grid-gap: 0.5rem; */
`
export const OurTeamCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const TeamMemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #E43F0F;
  object-fit: cover;
`
export const TeamMemberImageFirst = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #E43F0F;
  object-fit: cover;
`
export const TeamMemberImageSecond = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #E43F0F;
  object-fit: cover;
`
export const TeamData = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MemberName = styled.div`
  width: 100%;
  color: #303030;
  text-align: center;
  font-family: "Visby Round CF";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 0.25rem;
`
export const MemberPara = styled.div`
  width: 100%;
  background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: "Visby Round CF";
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0rem 0.5rem;
  height: 50px;
`

export const LeftArrow = styled.div`
    position: absolute;
    left: -1rem;
    cursor: pointer;
    z-index: 99;
    top: 35%;
    

`
export const RightArrow = styled.div`
    position: absolute;
    right: -1rem;
    cursor: pointer;
    z-index: 99;
    top: 35%;

`

export const ArrowImage = styled.img`
    width: 25px;
    height: 50px;


    @media screen and (max-width: 580px) {
        width: 20px;
        height: 40px;
    }

    @media screen and (max-width: 430px) {
        width: 15px;
        height: 30px;
    }
`