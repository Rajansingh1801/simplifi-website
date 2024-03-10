import styled from 'styled-components';
import FooterSvg from '../../../images/CarrotSvg/Footer.svg';

export const Footers= styled.nav`
    margin-top: -20px;
  background: #FFFFFF;
  height: auto;
  min-height: 400px;
  align-items: center;
  font-size: 16px;
  z-index: 999;
  position: relative;
  display: flex;
    justify-content: flex-end;
    flex-direction: column;

  /* add :before styles */
    :before {
        content: "";
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }

    @media screen and (max-width: 580px) {
        margin-top: 0px;
    }



`
export const Container=styled.div`
      margin: auto;
      width: 100%;
      padding: 0rem 3.5rem;
      max-width: 1700px;

      @media (max-width: 1000px){
        padding-top: 4rem;
      }

      @media (max-width: 768px){
        padding-top: 8rem;
      }
` 

export const FooterLogo=styled.img`
        width:180px;
        margin-left:-8px; 

        @media (max-width: 480px){
          width:118px;
      } 
`

export const FooterLinks=styled.div`
    padding: 0.3rem 0rem;
    color: #101011;
    text-align: left;
    font-size: 1rem;
    font-family: "Visby Round CF";
    font-weight: 400;
    letter-spacing: 0px;
    cursor: pointer;
`


export const CopyRight = styled.div`
    background: #00000010;
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
`

export const FooterText=styled.span`
    color: #101011;
    padding-bottom: 0.8rem;
    text-align: left;
    font-size: 1.25rem;
    font-family: "Visby Round CF";
    font-weight: bold;
    letter-spacing: 0px;
`

export const FooterRow = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: flex-start;
    padding: 2rem 1rem;
    grid-gap: 5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 3em;
    }
`


export const FooterBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const FooterFirstBox = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
`
export const FooterSocial=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0rem;
`
export const FooterSection=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const SocialIcon=styled.a`
    font-size: 1.4rem;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
        transition: all ease 0.1s;
        margin-top: -20px;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${FooterSvg}) no-repeat center center / cover;
    background-position-x: left;
    background-position-y: top;
;
`
export const CarrotAssociateMember = styled.img`
    position: absolute;
   top: -3rem;
   left: 5rem;
   width: 100px;
   height: 140px;
   z-index: 999;
`

export const LottieGreenBusinessFormLeft = styled.div`
    position: absolute;
    top: -3.5rem;
    left: 18%;
    width: 65px;
    height: 110px;
`
export const LottieGreenBusinessFormRight = styled.div`
    position: absolute;
    top: -5.25rem;
    right: 10%;
    width: 100px;
    height: 200px;
`