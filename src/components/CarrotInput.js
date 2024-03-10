import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


const WelcomeDesign = styled.div`
    height: 48px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 30px;


    @media screen and (max-width: 480px) {
      height: 42px;
    }

    @media screen and (max-width: 280px) {
      height: 34px;
    }
`

const TrapeziumLeft = styled.div`
    width: 50%;
    transform: skewX(6deg);

    background: #FFFAF5;
    border-left: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};
    border-top: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};
    border-bottom: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    translate: 4px;
`
const TrapeziumRight = styled.div`
    width: 50%;
    background: #FFFAF5;
    transform: skewX(-6deg);

    border-right: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};
    border-top: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};
    border-bottom: ${({ focusedInput }) => (focusedInput ? '1px solid #FD973A' : '1px solid #FEE0C4')};

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    translate: -4px;
`
const TrapeziumContentInput = styled.input`
   position: absolute;
    top: 0.18rem;
    left: 0.5rem;
    bottom: 0.18rem;
    right: 0.5rem;
    width: calc(100% - 16px);
    height: calc(100% - 5px);
    background: #FFFAF5;

   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   padding: 0.25rem 0.75rem;
   border-radius: 19px;


   border: none;
   outline: none;

   &::placeholder {
    font-family: 'Visby Round CF';
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #FFE1C5;

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 280px) {
      font-size: 0.75rem;
    }

   }

   font-family: 'Visby Round CF';
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #101011;

    &:focus {
        border: none;
        outline: none;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 280px) {
      font-size: 0.75rem;
    }


`
const TrapeziumContentPhoneInput = styled.div`
   position: absolute;
    top: 0.18rem;
    left: 0.5rem;
    bottom: 0.18rem;
    right: 0.5rem;
    width: calc(100% - 16px);
    height: calc(100% - 5px);
    background: #FFFAF5;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0rem;
   border-radius: 19px;


   border: none;
   outline: none;

   &::placeholder {
    font-family: 'Visby Round CF';
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #FFE1C5;

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 280px) {
      font-size: 0.75rem;
    }
    

   }

   font-family: 'Visby Round CF';
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    color: #101011;

    &:focus {
        border: none;
        outline: none;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 280px) {
      font-size: 0.75rem;
    }

`

const PswdIcon = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;

    @media screen and (max-width: 480px) {
      top: 0.9rem;
      right: 0.9rem;
      font-size: 0.9rem;
    }

    @media screen and (max-width: 280px) {
      top: 0.7rem;
      right: 0.7rem;
      font-size: 0.8rem;
    }
`


export default function Input(props) {
  const { error, type, phoneInput } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);

  return (
    <>
        <WelcomeDesign>
            <TrapeziumLeft
                focusedInput={focusedInput}
            />
            <TrapeziumRight
                focusedInput={focusedInput}
            />
            {phoneInput===true ? (
              <>
                <TrapeziumContentPhoneInput
                    type={type ? (showPassword ? "text" : type) : "text"}
                    onMouseEnter={() => {
                        setFocusedInput(true);
                    }}
                    onMouseLeave={() => {
                        setFocusedInput(false);
                    }}            
                >
                  <PhoneInput
                      {...props}
                  />
                </TrapeziumContentPhoneInput>
              </>
            ) : (
              <>
                <TrapeziumContentInput
                    {...props}
                    // className={(type==="password" && showPassword===false) ? "passwordDot" : ""}
                    type={type ? (showPassword ? "text" : type) : "text"}
                    onMouseEnter={() => {
                        setFocusedInput(true);
                    }}
                    onMouseLeave={() => {
                        setFocusedInput(false);
                    }}            
                />
              </>
            )}
            {type === "password" ? (
                <PswdIcon
                    onClick={() => setShowPassword(!showPassword)} 
                    className={`fa ${!showPassword ? "fa-eye-slash" : "fa-eye"}`}
                >
    
                </PswdIcon>
              ) : (
                ""
              )}
        </WelcomeDesign>
        {error ? (
            <p
              style={{
                paddingTop: 5,
                fontSize: 13,
                color: "red",
                textAlign: "left",
                width: "100%"
              }}>
              {error}
            </p>
          ) : null}
    </>
  );
}
