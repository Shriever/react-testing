import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleFormSubmit = e => {
    e.preventDefault();
    setItems(prevState => {
      return [...prevState, inputText];
    });
    setInputText('');
  };
  return (
    <div className='App'>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={inputText}
          onChange={e => {
            setInputText(e.target.value);
          }}
        />
        <button type='submit' disabled={!inputText}>
          Add Item
        </button>
      </form>
      <table>
        <th>Items</th>
        <tr>
          {items.map(item => (
            <td>{item}</td>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;