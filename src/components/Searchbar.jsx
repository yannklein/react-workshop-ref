import React from 'react';

function Searchbar({setKeyword}) {

  function handleChange(event) {
    setKeyword(event.currentTarget.value)
  }
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input placeholder="Starbucks" type="text" className="form-control" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;