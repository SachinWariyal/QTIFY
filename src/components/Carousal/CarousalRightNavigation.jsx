import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from './Carousal.module.css'
import {ReactComponent as RightArrow} from '../../assets/rightButon.svg'

const CarousalLeftNavigation = () => {
    const swiper = useSwiper();
    const[isEnd,setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isBeginning);
        })
    },[])

  return (
    <div className={styles.rightNavigation}> 
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default CarousalLeftNavigation
