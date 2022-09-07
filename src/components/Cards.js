import React from 'react'
import '../styles/Cards.scss'
import cloudy from '../images/LightRain.png'

function Cards({props,key}) {
  return (
    <div className='Cards'>
        <h2>{props.day1.date}</h2>
        <img src={cloudy} alt="cloudy img" />
        <div className="numbers">
            <h3>{props.day1.day}</h3>
            <h3 className='night'>{props.day1.night}</h3>
        </div>
    </div>
  )
}

export default Cards