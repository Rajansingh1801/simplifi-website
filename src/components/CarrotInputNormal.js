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


    @media screen and (max-width: 480px) {
      height: 42px;
    }

    @media screen and (max-width: 280px) {
      height: 34px;
    }
`

const TrapeziumContentInput = styled.input`
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   padding: 0.25rem 0.75rem;
   background: #FFF7EF;
    border-radius: 10px;

   border: 1px solid #E43F0F;
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

const TrapeziumContentTextArea = styled.textarea`
    width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   padding: 0.25rem 0.75rem;
   background: #FFF7EF;
    border-radius: 10px;

   border: 1px solid #E43F0F;
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
    width: 100%;
   background: #FFF7EF;
    border-radius: 10px;

   border: 1px solid #E43F0F;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0rem;

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
        {type==="textarea" ? (
            <>
                <TrapeziumContentTextArea
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
        ) : (
            <>
                <WelcomeDesign>
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
            </>
        )}
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
