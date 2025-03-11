import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';

function App() {
  const [cafes, setCafes] = React.useState([
    {
      id: 52,
      title: 'BROOKLYN PARLOR SHINJUKU',
      address:
        'Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo',
      picture:
        'https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg',
      hours: {
        Unknown: [],
      },
      criteria: ['Stable Wi-Fi', 'Power sockets', 'Quiet', 'Coffee', 'Food'],
      created_at: '2024-03-04T03:36:01.479Z',
      updated_at: '2024-03-04T03:36:01.479Z',
    },
    {
      id: 37,
      title: 'TOKYO VIP LOUNGE',
      address:
        'Yaesu Amerex Bldg 2F, 3F, 1-5-9 Yaesu Chuo-ku Tokyo, 103-0028, Tokyo',
      picture:
        'https://laptopfriendly.co/images/places/tokyo/tokyo-vip-lounge/tokyo-vip-lounge%20chuo-city%20tokyo-vip-lounge-chuo-city%20.jpg',
      hours: {
        Unknown: [],
      },
      criteria: ['Stable Wi-Fi', 'Power sockets', 'Quiet', 'Coffee'],
      created_at: '2024-03-01T07:45:37.054Z',
      updated_at: '2024-03-01T07:45:37.054Z',
    },
  ]);
  const [, setKeyword] = React.useState('');

  // React.useEffect(() => {
  //   const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
  //   const params = (keyword !== "") ? `?title=${keyword}` : "";
  //   fetch(url + params)
  //     .then(response => response.json())
  //     .then((data) => {
  //       setCafes(data);
  //     });
  // }, [keyword]);

  return (
    <div className="app-frame">
      <Navbar setKeyword={setKeyword} />
      <div className="app-body">
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={cafes} />
      </div>
    </div>
  );
}

export default App;
