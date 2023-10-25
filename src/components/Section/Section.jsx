// import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousal from "../Carousal/Carousal";
import BasicTabs from "../Tabs/Tabs"

const Section = ({title, data, type,filteredData=null,filteredDataValues=[],toggle=false,handleToggle=null, value=0,handleChange=null}) => {
  // const [carousalToggle, setCarousalToggle] = useState(true);

  // const handleToggle = () => {
  //   setCarousalToggle(!carousalToggle);
  // };
  return (
    <div> 
      <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All":"Collapse All"}
            </h4>
        </div>
        {type==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
        {data.length === 0 ? (  
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {toggle ? (   
              <div className={styles.wrapper}>
                {filteredDataValues.map(item => {
                  return(
                  <Card data={item} type={type} />
                  )
                })}
              </div>
            ) : (
              <Carousal data={filteredDataValues} renderComponent={(data)=> <Card data={data} type={type}/>}/>
            )}
          </div>
        )}
      
    </div>
  );
};

export default Section;
