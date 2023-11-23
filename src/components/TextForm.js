import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }
  
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");

  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");

  }
  
  // const handleCapitalizedClick = () =>{
  //   let newText = text.charAt(0).toUpperCase()   + text.slice(1).toLowerCase()
  //   setText(newText)
  const handleCapitalizedClick = () =>{
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text Capitalized!", "success");

 }
  // }

  const handleCopy = () => {
    console.log("i am copy")
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard!", "success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed!", "success");

  }

  const handleReverseText = () => {
    let newText= text.split("").reverse().join("");
    setText(newText)
    props.showAlert("Text Reversed!", "success");

  }

  const handleOnchange = (event) =>{
    // console.log("On change")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; // wrong way to change the state
  //setText("new text"); // correct way to change the state 
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalizedClick}>Capitalized Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleReverseText}>Reverse Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something int he Text Box above to Preview Here"}</p>
    </div>
    </>
  )
}
