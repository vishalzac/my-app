import React,{useState} from 'react';

export default function TextForm() {
  const handelUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handeloClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
   const handleOnchange = (event)=>{
    setText(event.target.value)

   }
    const [ text, setText ] = useState( 'Enter text here' );
  return (
    <>
    <div className="form-floating">
      <textarea className="form-control" value={text} onChange={handleOnchange} id="floatingTextarea2" style={{ height: '100px' }}></textarea>

    </div>
    <button type="button" class="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase</button>
    <button type="button" class="btn btn-primary mx-2 " onClick={handeloClick}>Convert to toLowerCase</button>
    <div className="containermy-3">
    <h1>YOUR TEXT SUMMAERY</h1>
    <p>{text.split(" ").length} words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length} MInutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
} 
