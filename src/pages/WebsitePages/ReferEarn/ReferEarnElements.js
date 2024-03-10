import styled from "styled-components";

export const VideoSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 2.5rem;
`

export const VideoDescription = styled.div`
    width: 70%;
    padding: 1rem 0rem;
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    text-align: center;
    color: #101011;
`

export const BigVideo = styled.iframe`
    width: 70%;
    margin: 1rem 0rem;
    border-radius: 10px;
    height: 300px;
`

export const VideoRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const LeftArrow = styled.div`
    padding-right: 2rem;
    cursor: pointer;
`

export const RightArrow = styled.div`
    padding-left: 2rem;
    cursor: pointer;
`

export const ArrowImage = styled.img`
    width: 30px;
    height: 60px;
`

export const VideoInside = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
    align-items: center;
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
    scroll-behavior: smooth; */
`
export const VideoInsideImage = styled.img`
    margin-right: 1rem;
    width: 100%;
    border-radius: 15px;
    scale: ${({ index }) => (index===1 ? '1.05' : '1.0')};
    height: ${({ index }) => (index===1 ? '140px' : '120px')};


    @media screen and (max-width: 768px ) {
        height: 100px;
    }


`
export const ReferralSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`
export const ReferralLinkData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const ReferralImage = styled.img`
    width: 380px;
    height: 300px;
`

export const ReferralPara = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    text-align: center;
    color: #101011;
    padding: 1rem 0rem;
`
export const ReferralHeading = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    padding: 1rem 0rem;
`
export const ReferralLink = styled.div`
    background: #FFF7EF;
    border-radius: 10px;
    padding: 0.8rem 1rem;
    border: 1px solid #E43F0F;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const LinkText = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 0.9;
    line-height: 19px;
    text-align: center;
    color: #101011;
    padding: 0rem 2rem;
`
export const CoptTheLink = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 22px;
    text-align: center;
    color: #101011;
    padding: 1rem 4rem;
    border-bottom: 1px solid #CFCAC3;

`
export const CopyToClickboard = styled.div`
    cursor: pointer;
    /* position: absolute;
    right: 1rem;
    top: 0.8rem; */
`
export const InviteData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const InviteByHeading = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding: 1.5rem 0rem;
`
export const InviteBubblesRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const InviteButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0.8rem;
    margin: 0rem 0.5rem;
    background: linear-gradient(89.72deg, #28C54E 0.28%, #A1F68B 99.85%);
    border-radius: 50%;
`
export const InviteButtonSmall = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0.8rem;
    margin: 0rem 0.5rem;
    background: linear-gradient(89.72deg, #28C54E 0.28%, #A1F68B 99.85%);
    border-radius: 50%;
    opacity: 0.3;
`
export const InviteButtonMiddle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0rem 0.5rem;
    background: linear-gradient(89.72deg, #28C54E 0.28%, #A1F68B 99.85%);
    border-radius: 50%;
    opacity: 0.4;
`