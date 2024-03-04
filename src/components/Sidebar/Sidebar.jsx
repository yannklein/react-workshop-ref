import React from 'react';
import "./Sidebar.css";

function Sidebar({setCafes}) {
  function addCafe(form) {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes"
    fetch(url, {
      method: "POST",
      body: new FormData(form)
    })
      .then(response => response.json())
      .then((newCafe) => {
        setCafes((cafeList) => [...cafeList, newCafe]);
        form.reset();
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addCafe(event.currentTarget)
  }

  const criteria = ["Stable Wi-Fi", "Power sockets", "Quiet", "Coffee", "Food"]

  return (
    <div className="sidebar">
      <div>
        <h3>Share your work spot</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cafe-title" className="form-label">What's its name?</label>
            <input name="cafe[title]" placeholder="FabCafe Shibuya" type="text" className="form-control" id="cafe-title" aria-describedby="emailHelp" />
          <div className="mb-3"> 
          </div>
            <label htmlFor="cafe-address" className="form-label">Where is it?</label>
            <input name="cafe[address]" placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" type="address" className="form-control" id="cafe-address" />
          </div>
          <div className="mb-3"> 
            { criteria.map((criterion) => {
              return ( 
                <React.Fragment key={criterion}>
                  <input name="cafe[criteria][]" type="checkbox" className="btn-check" id={criterion} autoComplete="off" value={criterion}/>
                  <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor={criterion}>{criterion}</label>
                </React.Fragment>
              )
            }) }
          </div>
          <div className="mb-3">
            <label htmlFor="cafe-picture" className="form-label">What's its name?</label>
            <input name="cafe[picture]" type="text" className="form-control" id="cafe-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Ready to brew</button>
          </div>
        </form>
      </div>
      <img src="logo_w_context2.png" alt="" />
    </div>
  );
}

export default Sidebar;