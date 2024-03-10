import styled from 'styled-components'
import HomeBgDot from '../../../images/CarrotSvg/All_StoresBg.png'
import HomeBgDottt from '../../../images/CarrotSvg/Associate_MemberBg.png'
export const ImgBgDot = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBgDot}) no-repeat center center / cover;
    background-position-x: left;
    background-position-y: 4%;
`

export const ImgBgDotDetails = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBgDottt}) no-repeat center center / cover;
    background-position-x: center;
    background-position-y: 5%;
`

export const SortRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #DDDDDD;
    padding: 1rem;
    position: relative;
`
export const SortData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export const SortBy = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 24px;
    color: #000000;
    padding-right: 1rem;
`
export const SortButton = styled.div`
    background: ${({ IsSelected }) => (IsSelected ? 'linear-gradient(89.72deg, #28C54E 0.28%, #A1F68B 99.85%)' : '#FFFFFF')};
    color: ${({ IsSelected }) => (IsSelected ? '#FFFFFF' : '#000000')};
    border: ${({ IsSelected }) => (IsSelected ? 'none' : '1px solid #28C54E')};
    border-radius: 14px;
    cursor: pointer;
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 22px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
`
export const OfferDetails = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    color: #101011;
    font-weight: 700;
    font-size: 1rem;
    line-height: 22px;
    padding: 0.5rem 0rem;
`
export const BgDiv = styled.div`
    width: 80%;
    margin: 1rem 0rem;
    padding: 0.035rem;
    border-radius: 10px;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);;
`
export const OfferDetailsHeading = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    color: #101011;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    padding: 0.5rem 0rem;
`
export const AllStoresSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
    padding: 1.5rem;
`
export const StoresCarrot = styled.img`
   position: absolute;
   bottom: -1rem;
   right: -3rem;
   width: 90px;
   height: 110px;
`
export const StoresCarrotSingleStore = styled.img`
   position: absolute;
   top: -2rem;
   width: 90px;
   height: 110px;
   z-index: 999;
`
export const StoreCard = styled.div`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #FFE1D8;
    border-radius: 14px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition: 0.2s all ease;

    &:hover {
        filter: drop-shadow(0px 0px 24px rgba(228, 63, 15, 0.15));
        border: none;
    }

`
export const AllStoresCard = styled.div`
    width: 100%;
    background: #FFFFFF;
    border-radius: 14px;
    height: 100%;
    border: 1px solid #E43F0F;

    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const PaginationRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #DDDDDD;
    padding: 1rem;
`
export const PageInnerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const InnerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 600px;
    overflow-x: scroll;
`
export const LeftArrow = styled.div`
    font-size: 1rem;
    display: flex;
    margin-right: 0.5rem;
    color: ${({ IsDisabled }) => (IsDisabled ? '#10101130' : '#101011')};

`
export const RightArrow = styled.div`
    font-size: 1rem;
    display: flex;
    margin-left: 0.5rem;
    color: ${({ IsDisabled }) => (IsDisabled ? '#10101130' : '#101011')};

`
export const PageButton = styled.div`
    background: ${({ IsSelectedPage }) => (IsSelectedPage ? '#FFF7EF' : '#FFFFFF')};
    border-radius: 8px;
    margin: 0rem 0.5rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    color: #101011;
    padding: 0.5rem 1rem;

`
export const OfferSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
`
export const StoreLogo = styled.img`
    width: 160px;
    height: 70px;
    margin : 1rem 0rem;
`
export const StoreDetailButton = styled.div`
    padding: 1rem 0rem;
`
export const CardLogo = styled.img`
    margin: 1rem 0rem;
    width: 200px;
    height: 80px;
`
export const PageHeadingRed = styled.div`
    font-family: 'Titan One';
    font-style: normal;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
export const PageHeadingGreen = styled.div`
    font-family: 'Titan One';
    font-style: normal;
    background: linear-gradient(64deg, #28C54E 0%, #A1F68B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

export const CarrotButton = styled.a`
    background: linear-gradient(103.5deg, #666666 33.17%, #FFFFFF 67.69%, #808080 105.27%);
    margin: 0rem;
    white-space: nowrap;
    cursor: pointer;
    position: relative;
    
    border-radius: 12px;
    padding: 0.8rem 4rem;
    cursor: pointer;
    border: none;
    transition: all 0.15s ease-in-out;

    @media screen and (max-width: 420px) {
        padding: 1rem 3rem;
    }
    

    &:hover {
        transform: scale(1.15);
    }


`