import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from './Carousal.module.css'
import {ReactComponent as LeftArrow} from '../../assets/leftButton.svg'

const CarousalLeftNavigation = () => {
    const swiper = useSwiper();
    const[isBeginning,setIsBeginning] = useState(swiper.isBegining);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[swiper])

  return (
    <div className={styles.leftNavigation}> 
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CarousalLeftNavigation
