import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CafeList from './CafeList';


function App() {
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://gist.githubusercontent.com/yannklein/5d8f9acb1c22549a4ede848712ed651a/raw/a66a32fa5a6e2faf5b861f4ee340d3c68ba27ad3/cafe.json"
    const params = (keyword !== "") ? `&keyword=${keyword}` : ""
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        setCafes(data);
      })
  }, [keyword]);

  return (
    <div className='vh-100 vw-100'>
      <Navbar setKeyword={setKeyword} />
      <div className="d-flex">
        <div className="row w-100">
          <div className="col-12 col-sm-4 col-xl-3">
            <Sidebar setCafes={setCafes} />
          </div>
          <div className="col-12 col-sm-8 col-xl-9">
            <CafeList cafes={cafes}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;