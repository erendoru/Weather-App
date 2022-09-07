import React, { useCallback, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../styles/Sidebar.scss";
import img from "../images/Shower.png";
import moment from "moment";
import { useGeolocated } from "react-geolocated";
import debounce from "lodash/debounce";

function Sidebar({ temps, condition, place, setLocation, number }) {
  const current = new Date();
  const date = `${moment().format("dddd")},${
    current.getMonth() + 1
  } ${moment().format("MMM")}`;

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const changeHandler = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    if (coords?.latitude && coords?.longitude) {
      setLocation(`${coords?.latitude},${coords?.longitude}`);
    }
  }, [coords]);

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);


  return (
    <div className="sidebar">
      <div className="nav">
        <input
          type="text"
          placeholder="Search for places"
          onChange={debouncedChangeHandler}
        />
        <div
          className="icondiv"
          onClick={() =>
            setLocation(`${coords?.latitude},${coords?.longitude}`)
          }
        >
          <Icon className="icon" icon="mdi:target" />
        </div>
      </div>

      <div className="image">
        <img src={img} alt="Shower images" />
      </div>

      <div className="infos">
        <div className="weathernumber">
          <h2>
            {temps} <span className="second calc">{number}</span>
          </h2>
        </div>
        <div className="condition">
          <h3>{condition}</h3>
        </div>
        <div className="date">
          <h3>Today</h3>
          <Icon icon="bi:dot" />
          {date}
        </div>

        <div className="place">
          <Icon icon="carbon:location-filled" className="icon" /> {place}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
