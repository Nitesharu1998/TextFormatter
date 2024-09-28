import React, {useState} from 'react'
function TextForm(props) {

const handleOnChange=(event)=>{
  setText(event.target.value); 
  }
const handleOnUpperClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","success");
  }
  const handleOnLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase","success");
  }
  const handleOnClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text is cleared","success");
  }
  const handleOnCopyClick=()=>{
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text is copied","success");
  }
  const handleOnRemoveSpaceClick=()=>{
    let txt=text.split(/[ ]+/);
    setText(txt.join(" "));
    props.showAlert("Extra spaces has been removed","success");
  }
const [text,setText]= useState('');

  return (
    <>
    <div className='container' style={{color: 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={{backgroundColor: 'white', color: 'black'}} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnUpperClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnLowerClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleOnCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleOnRemoveSpaceClick}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: 'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes are required to read this</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter text in textbox to get preview here'}</p>
    </div>
    </>
  )
}

export default TextForm