import React from 'react';
// import ReactDOM from 'react-dom';
// import Draggable from 'react-draggable';
// import dropIcon from '../images/draggableIcon.png';
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import uploadVideo from "../images/uploadVideo.svg"
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
    padding: 0.6rem;

`;
class FileDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    // this.props.onDrop = (files) => {
    //   this.setState({files})
    // };
   
    this.handleBlank = this.handleBlank.bind(this);
    this.customDescription = this.customDescription.bind(this);
  }
  handleBlank () {
    this.props.setFieldValue("video", "");
    // setFileObject()
    this.setState({files:[]})
  };
 
   customDescription  (e)  {
    if (e.length <= 15) {
      return e;
    } else {
      let text = e.slice(0, 15) + " ... ";
      return text;
    }
  };
  render() {
    
    return(
      <Dropzone 
      accept={
        {
          "video/*": []
        }
      }
      // onDrop={this.props.onDrop} 
      onDrop={async (e) => {
        console.log(e);
        const fileSize = e[0].size / 1024 / 1024; // in MiB
        if (fileSize > 20) {
            alert("exceeds 20mb");
            // $(file).val(''); //for clearing with Jquery
        } else {
           this.props.setIsLoading(true);
           this.setState({files:e})
            var video = await  this.props.uploadImage(e[0]);
          
            
            this.props.setFieldValue('video', video.path)

            this.props.setIsLoading(false);
        }
    }}
       {...this.props}>
       
  {({getRootProps, getInputProps,acceptedFiles}) => (
    <section style={{
      width:"100%",
      borderRadius: "0.8rem",
      border: "1px dashed #E43F0F",
      background: "#FFF7EF",
      padding:"2rem",
      cursor:"pointer"
      }}
     
      >
      {this.state.files.length==0?<div {...getRootProps()}>
        <input {...getInputProps()} />
        <div style={{}}>
             
              <div style={{display: "flex", alignItems:"center", flexDirection:"column",gap:"0.5rem"}}>
                {/* <span style={{fontSize: "18px", color : "#000000" }}>Add Video</span> */}
                <img src={uploadVideo}/>
                <span
                 style={{
                  color: "#FFE1D8",
textAlign: "center",
fontFamily: "Visby Round CF",
fontSize: "1.2rem",
fontStyle: "normal",
fontWeight: 500,
}}>
  Click or drag a file to this area to upload .
  </span>
              </div>
              </div>
      </div> :
    
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",}}>
       <div style={{padding:"0.5rem",backgroundColor:"#F9F9F9",borderRadius:"1.5rem",color:"#787878",border:"1px solid #CECECE"}}>
       {this.state.files.map((file,error)=>this.customDescription(file.name))}
         </div>
         <CrossButton type='button' onClick={this.handleBlank}>x</CrossButton>
      </div>
     }
       {console.log("ttttttttttt",this.state.files)}
    </section>
  )}
</Dropzone>
    )
  }
}

export default FileDrop;
