// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums, fetchSongs } from "./api/api";
// import Card from './components/Card/Card';
import Section from "./components/Section/Section";
import styles from "./app.module.css"

function App() {
  // const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [data,setData] = useState([])
  const [songsData , setSongsData] = useState([])
  const [filteredDataValues,setFilteredDataValues] = useState([])
  const [toggle,setToggle] = useState(false);
  const [value,setValue]=useState(0)

  
  const handleToggle=()=>{
    setToggle(!toggle);
  };
  const handleChange=(event, newValue)=>{
    setValue(newValue)
  };
  const generateSongsData=(value)=>{
    let key;
    if(value===0){
      filteredData(songsData);
      return;
    }else if(value===1){
      key="rock";
    }else if(value===2){
      key="pop";
    }
    const res = songsData.filter((item)=>item.genre.key===key);
    filteredData(res);
  }
  useEffect(()=>{
    generateSongsData(value);
  },[value])

  const generateData = async () => {
    try{
    const data = await fetchTopAlbums();
    // console.log(data);
    setData(data);
    }catch(err){
      console.error(err);
    }
  };  
  // useEffect(() => {
  //   generateData();
  // }, []);

  const generateAllSongsData = async ()=>{
    try{
      const data = await fetchSongs();
      console.log(data);
      setSongsData(data);
      setFilteredDataValues(data);
    }catch(err){
      console.error(err);
    }
  }
  const filteredData=(val)=>{
    setFilteredDataValues(val);
  }
  useEffect(()=>{
    generateData();
    generateAllSongsData();
  },[])

  return (
    <div>
      <Navbar data={data}/>
      <Hero />
        <div className={styles.sectionWrapper}>
        <Section data={data} type="album" title="Top Albums" filteredDataValues={data}/>
        <Section data={data} type="album" title="New Albums" filteredDataValues={data}/>
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
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
