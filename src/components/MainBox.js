import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import useModalVisible from '../hooks/useModalVisible';
import StaticData from '../Data/StaticData.json'
import '../styles/mainBox.css';
import MainModal from './MainModal';
import MainCard from './MainCard';

export default function MainBox() {
 
  var InitialData = [
    {
      "id": "98",
      "name": "Chilman Mehrotra",
      "post": "Client Manager"
    },
    {
      "id": "99",
      "name": "Sabur Sirwal",
      "post": "Recruitment Success"
    },
    {
      "id": "100",
      "name": "Smriti Wadhwa",
      "post": ""
    },
  ];

  /* Loading local storage data if present else using InitiaData */
  const localData = (localStorage.getItem('CSM') === null) ? InitialData : JSON.parse(localStorage.getItem('CSM'));

  const [csm, setCsm] = useState(localData); /* Main state to handle team members */
  const [inputValue, setInputValue] = useState(""); /* State to handle input value of search box */
  const [searchResult, setSearchResult] = useState(StaticData); /* State to handle search results */
  const [pointer, setPointer] = useState(0); /* State to handle arrow key movements */
  const [selected, setSelected] = useState([]); /* State to handle selected items that is to added in csm */
  const { isModalVisible, setIsModalVisible, ref } = useModalVisible(false); /* state to handle search modal visibility */

  /* Storing csm to local storage of browser */
  useEffect(() => {window.localStorage.setItem('CSM', JSON.stringify(csm));}, [csm]);

  /* Delete functions */
  const handleDelete = (id) => {
    const removeItem = csm.filter((item) => item.id !== id);
    setCsm(removeItem);
  }
  const handleChipDelete = (id) => {
    const removeItem = selected.filter((item) => item.id !== id);
    setSelected(removeItem);
  }

  /* Handle input function */
  const handleInput = (e) => {setInputValue(e.target.value); setPointer(0); }
  useEffect(() => {handleSearch(inputValue)}, [inputValue]); 
  
  /* Search function */
  const handleSearch = (SearchKey) => {
    var keys = ['name', 'email'] // fields we have to search in 
    var lowSearchKey = SearchKey.toLowerCase();
    var result = StaticData.filter(obj => keys.some(key =>String(obj[key]).toLowerCase().includes(lowSearchKey)));
    setSearchResult(result);
  }

  /* Keyboard navigation */
  const handleKeyMovement = (e) => {
    //Selecting with Enter Key
    if (e.keyCode === 13)
    {
      let newSelected = [];
      let item = searchResult[pointer];
      // Select the item if already not selected
      if (!selected.includes(item)) {
        newSelected = selected.concat(item);
        setSelected(newSelected);
      }
    }
    //Modal closing with Esc Key
    else if (e.keyCode === 27)
    {
      setInputValue("");
      setIsModalVisible(false);
    }
    //up arrow movement
    else if (e.keyCode === 38 && pointer > 0) 
    { 
      e.preventDefault();
      setPointer(pointer - 1) 
    }
    //down arrow movement
    else if (e.keyCode === 40 && pointer < searchResult.length - 1)
    { 
      e.preventDefault();
      setPointer(pointer + 1)
    }
  }

  /* Selection function */
  const handleSelect = (event, item) => {
    let newSelected = [];
    // Select the item if already not selected
    if (!selected.includes(item)) {
      newSelected = selected.concat(item);
      setSelected(newSelected);
    }
  }

  /* Addition function */
  const handleClick = () => {
    // Update csm only if selected item is not present in csm
    selected.forEach(item => {
      if (!csm.some(row=> row.id === item.id)) {
        setCsm((arr)=>[...arr,item]);
      }
    });
    // Emptying selected state and input state after items are added to csm
    setSelected([]);
    setInputValue("");
  }

  /* Function to get initials of name for avatar */
  const getInitials = (csmName) => {
    var names = csmName.split(' '), initials = '';
    for (var i = 0; i < names.length; i++) {
      initials += names[i].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <div className='box'>
      <h1>Customer Success Managers</h1>
      <div className='search-box'>
        <div className="search-container">
          <div className="chip-box">
            {/*generating chips from selected array */}
            {selected.map((item, index) => {
              return (
                <div className="chip" key={index}>
                  <span className="chip-text">{item.name}</span>
                  <MdOutlineClose className="chip-delete" onClick={() => handleChipDelete(item.id)} />
                </div>
              )
            })}
            <input type="text" name="search" id="search-input" value={inputValue} placeholder={selected.length === 0 ? 'Add by Name or email' : ''} onClick={() => setIsModalVisible(true)} onChange={(e)=>{handleInput(e);setIsModalVisible(true)}} onKeyDown={handleKeyMovement}/>
          </div>
          <button onClick={handleClick}>Add CSM</button>
        </div>
      </div>
      {isModalVisible && <MainModal searchResult={searchResult} refl={ref} handleSelect={handleSelect} pointer={pointer} getInitials={getInitials}/>}
      <MainCard  csm={csm} handleDelete={handleDelete} getInitials={getInitials} />
    </div>
  )
}
