import React, {useState} from 'react'

function TextForm(props) {
    const[text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new Text"); // Correct way to change the state

    const handleUpClick = () => {
        console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("LowerCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = () => {
        console.log("Your textarea is cleared" + text);
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Textarea</button>
    </div>
    <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
