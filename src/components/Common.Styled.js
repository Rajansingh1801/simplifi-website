import styled, { keyframes } from "styled-components/macro";
import { joinStrs } from "../utils/functions";

export const Row = ({ mt = 0, className = "", parentClassName = "", children, ...props }) => (
  <div className={joinStrs(mt && "mt-" + mt, parentClassName)}>
    <div {...props} className={joinStrs("row", className)}>
      {children}
    </div>
  </div>
);

export const Col = ({ className = "", childClassName = "", childNoFlex = false, children, ...props }) => (
  <div {...props} className={joinStrs("col d-flex flex-column", className)}>
    <div className={joinStrs("flex-grow-1", childNoFlex || "d-flex flex-column", childClassName)}>{children}</div>
  </div>
);

const flexProps = {
  h: "row",
  hr: "row-reverse",
  v: "column",
  vr: "column-reverse",
  s: "flex-start",
  fs: "flex-start",
  e: "flex-end",
  fe: "flex-end",
  c: "center",
  sb: "space-between",
  sa: "space-around",
  st: "stretch",
};

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => flexProps[props.fd] || props.fd || "row"};
  justify-content: ${(props) => flexProps[props.jc] || props.jc || flexProps["fs"]};
  align-items: ${(props) => flexProps[props.ai] || props.ai || flexProps["st"]};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex: ${(props) => props.flex || ""};
  font-family: "Montserrat";
`;

export const ResetCont = styled.div`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    transition: 0.2s;
  }
`;

export const StripesAnimation = keyframes`
  to {
    background-position: 100% 100%;
  }
`;

export const Stripes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: ${(props) => props.progress * 100}%;
  height: 100%;
  background-image: repeating-linear-gradient(-45deg, transparent, transparent 10px, #0003 10px, #0003 20px);
  background-size: 200% 200%;
  transition: 0.25s;
  animation: ${StripesAnimation} 5s linear infinite;
`;

export const ButtonIconBack = styled.button`
  width: 2.5em;
  height: 2.5em;
  margin: 0;
  padding: 0;
  background: #ebf0f8;
  border-radius: 50%;
  border: none;
  outline: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #dfdfdf;
  }
`;
