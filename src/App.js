// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { fetchTopAlbums } from './api/api';
// import Card from './components/Card/Card';
import Section from './components/Section/Section';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async() =>{
    const data = await fetchTopAlbums();
    console.log(data)
    setTopAlbumsData(data)
  }
  useEffect(()=>{
    generateTopAlbumsData();
  },[])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums"/>
      </div>
      {/* {
        topAlbumsData.map((item)=>{
          return(
            <Card data={item} type="album"/>
          )
        })
      } */}
    </div>
  );
}

export default App;
