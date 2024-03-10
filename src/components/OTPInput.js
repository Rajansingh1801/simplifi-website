import React, { useState } from 'react'
import styled from 'styled-components'
import OtpInput from "react-otp-input";

const LabelInput = styled.div`
    display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   padding-bottom: 1rem;
   @media screen and (max-width: 420px) {
        padding-bottom: 0.5rem;
    }
`

export default function Input(props) {
  const { error } = props;

  return (
    <>
        <LabelInput className="otp_input">
            <OtpInput
                {...props}
                isInputNum={true}
            />
        </LabelInput>
      {error ? (
        <p
          style={{
            paddingTop: 5,
            fontSize: 13,
            color: "red",
            textAlign: "center",
            width: "100%"
          }}>
          {error}
        </p>
      ) : null}
    </>
  );
}
