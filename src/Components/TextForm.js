import React from 'react'
import { useState } from 'react'

function TextForm(props) {

    const handleUp = () => {
        setText(text.toUpperCase());
    }

    const handleLo = () => {
        setText(text.toLowerCase());
    }

    const change = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

  return (
    <div>
<div class="my-3" style={props.sty}>
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={change}></textarea>
  <button class="mx-1 btn btn-primary" onClick={handleUp} >Submit</button>
  <button class="mx-1 btn btn-primary" onClick={handleLo}>Submit</button>
</div>
    </div>
  )
};

export default TextForm;