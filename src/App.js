import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import { Gallery } from '@/Pages/gallery/Gallery';
import Home from './Pages/Home/Home';
import images from '@/imgs/index';
import { Menu } from './Pages/Menu/Menu';
const array2 = [
  images.bg.Bg1,
  images.bg.Bg2,
  images.bg.Bg3
];

function App() {
  const [active, setActive] = useState(array2[0]);
  const [activeImg, setActiveImg] = useState(array2[0]);
  const [checkAuto, setcheckAuto] = useState(0);
  const handleActive = (e) => {
    setActive(e);
    setActiveImg(e);
  }
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (checkAuto > 1) {
        setcheckAuto(1);
        setActiveImg(array2[0]);
        setActive(array2[0]);
      } else {
        setcheckAuto(checkAuto + 1);
        setActiveImg(array2[(checkAuto + 1)]);
        setActive(array2[(checkAuto + 1)]);
      }
    }, 5000);
    return () => clearInterval(myInterval);
  }, [checkAuto]);
  const [account, setAccount] = useState([]);
  // api 
  // useEffect(() => {
  //   fetch('https://phuoccallapi.000webhostapp.com/?ctrller=callapi',{
  //     mode: "cors",
  //     headers: {
  //       "access-control-allow-origin" : "*",
  //       // "Content-type": "application/json; charset=UTF-8",
  //       // "access-control-allow-headers": "content-type"
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //      console.log(data);
  //   })
  //   .catch((err) => {
  //      console.log(err.message);
  //   });
  // }, []);
  // end api
  //---------------- Validate

  return (
    <div className={'App'} style={{ 'backgroundImage': 'url(' + activeImg + ')', 'transition': 'all 1s ease-out' }}>
      <Menu/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/gallery' element={<Gallery />} />
        {/* End account */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <div className='App-Menu'>
        <ul>
          {
            array2.map((value, id) =>
              <li className={active === value ? 'is-active' : ''} key={id} onClick={() => handleActive(value)}></li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
