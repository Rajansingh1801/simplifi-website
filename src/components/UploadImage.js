import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { uploadImage } from '../utils/functions';


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
const Button = styled.button`

  border-radius: 0.2rem;
  background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%);
  padding:1rem;
  border: none;
  color: #fff;
  text-align: center;
font-family: "Visby Round CF";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const CrossButton = styled.button`

  border-radius: 50%;
  background: black;
 
  border: none;
  color: #fff;
  text-align: center;
font-family: "Visby Round CF";
width: 1rem;
height: 1rem;
font-style: normal;
font-weight: 500;
display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.6rem;


`;

export default function Input(props) {
  const { error, type, phoneInput,setIsLoading,setFieldValue,Imagepath } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const [fileObject,setFileObject]=useState()
 // Create a reference to the hidden file input element
 const hiddenFileInput = React.useRef(null);
  
 // Programatically click the hidden file input element
 // when the Button component is clicked
 const handleClick = event => {
   hiddenFileInput.current.click();
 };
 // Call a function (passed as a prop from the parent component)
 // to handle the user-selected file 
 const handleChange = async(event) => {
   const fileUploaded = event.target.files[0];
   console.log("imageeee",fileUploaded)
   setFileObject(fileUploaded)
   const fileSize = event.target.files[0].size / 1024 / 1024; // in MiB
              if (fileSize > 2) {
                    alert("exceeds 2mb");
                          // $(file).val(''); //for clearing with Jquery
                } else {
                      setIsLoading(true);
          var image = await uploadImage(event.target.files[0]);
                                                                           
                                                 
           setFieldValue("logo", image.path);
        
     setIsLoading(false);
     
                                                                            }
 };
 const handleBlank = event => {
  setFieldValue("logo", "");
        
  setFileObject()
};
const customDescription = (e) => {
  if (e.length <= 10) {
    return e;
  } else {
    let text = e.slice(0, 10) + " ... ";
    return text;
  }
};
console.log(Imagepath)
  return (
    <>
        {!fileObject ? (
            <>
               <Button type="button" onClick={handleClick}>
        Choose an Image
      </Button>
      <input
      {...props}
      name='logo'
        type="file"
        accept='image/*'
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
            </>
        ) : (
            <>
               {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"}}>
                <div style={{padding:"0.5rem",backgroundColor:"#F9F9F9",borderRadius:"1.5rem",color:"#787878",border:"1px solid #CECECE"}}>
                  {customDescription(fileObject.name)}
                  </div>
                 
               </div> */}
               <div style={{position:"relative"}} >
                <img key={Imagepath} src={Imagepath} width="50px" height={"50px"} style={{borderRadius:"0.2rem"}}/>
                <div style={{position: "absolute",top:-8,right:-5}}><CrossButton type='button' onClick={handleBlank}>x</CrossButton></div>
               </div>
            </>
            
            
        )}
        {error ? (
            <p
              style={{
                paddingTop: 5,
                fontSize: 13,
                color: "red",
                textAlign: "left",
                width: "100%",
                textAlign:"center"
              }}>
              {error}
            </p>
          ) : null}
    </>
  );
}
