import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Faq = styled.div`
  padding-top: 120px;
  background: #fff;
  height: 80px;
  display: flex;
  font-size: 1rem;
`;
export const FaqContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;
export const FaqLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 70px;
  padding-right: 15px;
  //font-weight: bold;
  text-decoration: none;
  border-bottom: 0.25rem solid #f37335;
  // border-width: 0.25rem;
  // border-style: solid;
  // border-image: linear-gradient(237deg, #F37335 10.25%, #FDC830 96.37%);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding-left: 10px;
  }
`;

export const FaqSearch = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 8rem;

  // @media screen and (max-width: 576px) {
  //   align-items: center;
  //   list-style: none;
  //   text-align: center;
  //   margin-left: -10rem;
  //   margin-top: 7rem;
  // }
`;
export const Searchbar = styled.div`
  background-color: white;
  border-radius: 70px;
  display: flex;
  padding: 7px 12px;
  margin-top: 1rem;
  ${"" /* width: 20rem; */}
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const SearchIcon = styled(FiSearch)`
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  font-family: PP Neue Montreal;
  text-align: left;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 5rem;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media screen and (max-width: 576px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media screen and (max-width: 300px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
export const QuesContainer = styled.div`
  border-bottom: 0.1rem solid #e5e5e5;
  border-height: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  cursor: pointer;
`;

export const Quest = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const Answer = styled.p`
  border-left: 0.3rem solid #f37335;
  padding-left: 2rem;
  margin-left: 4em;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    margin-left: 1em;
    padding-left: 1rem;
  }

  @media screen and (max-width: 300px) {
    margin-left: 0em;
    padding-left: 1rem;
  }
`;
