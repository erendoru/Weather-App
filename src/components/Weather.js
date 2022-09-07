import React from "react";
import "../styles/Weather.scss";
import Cards from "./Cards";
import data from "../data";
import { Icon } from "@iconify/react";
import ProgressBar from "@ramonak/react-progress-bar";

function Weather({ infos, setNumber }) {

  return (
    <div className="Weather">
      {console.log("weather.js", infos?.infos?.cloud)}

      <div className="icons">
        <div className="icon" onClick={() => setNumber('℃')}>
          <h2>℃</h2>
        </div>
        <div className="icon" onClick={() => setNumber('℉')} >
          <h2>℉</h2>
        </div>
      </div>

      <div className="cards">
        <Cards props={data} />
        <Cards props={data} />
        <Cards props={data} />
        <Cards props={data} />
        <Cards props={data} />
      </div>

      <div className="infos">
        <h1 className="subject">Today's Hightlights</h1>
        <div className="cards">
          <div className="toptwo">
            <div className="wind bigcard">
              <h2>Wind status</h2>
              <h1>{infos?.vis_km} mph</h1>
              <div className="icondivv">
                  <div className="icondiv">
                <Icon className="icon" icon="eva:navigation-fill" />
                </div>
                <h2>WSW</h2>
              </div>
            </div>
            <div className="visibility bigcard">
              <h2>Visibility</h2>
              <h1>{infos?.vis_miles} miles</h1>
            </div>
          </div>
          <div className="bottomtwo">
            <div className="humidity bigcard">
              <h2>Humidity</h2>
              <h1>{infos?.humidity}%</h1>
              <div className="percentage">
                <div className="numbers">
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                </div>
                <div className="bar">
                  <ProgressBar
                    className="wrapper"
                    bgColor='#FFEC65'
                    height='15px'
                    customLabel=' '
                    completed={infos?.humidity}
                  />
                </div>
                <div className="perc-icon">
                  <p>%</p>
                </div>
              </div>
            </div>
            <div className="air bigcard">
              <h2>Air Pressure</h2>
              <h1>{infos?.pressure_mb} mb</h1>
            </div>
          </div>
        </div>
      </div>
      <p className='tag'>created by erendoru - devchallanges.io</p>
    </div>
  );
}

export default Weather;
