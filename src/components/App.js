
import React, { useState } from "react";
import './../styles/App.css';

let i=0;

const App = () => {
  const [inputIds, setInputIds] = useState([]);

  function addField() {
    setInputIds([...inputIds, ++i]);
  }

  console.log(inputIds);

  function deletefield(id) {
    const updatedInputIds = inputIds.filter(inputId => inputId !== id);
    setInputIds(updatedInputIds);
  }

  return (
    <div>
      <form>
        {
          inputIds.length
          ?
          inputIds.map(id => (
            <div key={id}>
              <input />
              <button onClick={() => deletefield(id)}>Delete</button>
            </div>
          ))
          :
          <div>No fields from form</div>
        }
      </form>
      <button onClick={addField}>Add Field</button>
    </div>
  )
}

export default App
