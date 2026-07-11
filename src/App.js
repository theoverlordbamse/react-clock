  import {useState} from "react";
  import React from "react";

  import './App.css'

  import ShowDate from "./showDate";
  import ControlPanel from "./controlPanel";
  import ShowClock from "./showClock";

  const App = () => {

    const [data, setData] = useState({
      // toggles is the calendar is shown
      'toggleCalendar': true,
      // toggles if the clock is shown
      'toggleClock': true,
      // toggles the between black and white
      'backgroundColor': 'black',
      // selects the currently selected language
      'lang': 'GB',

      "langWords": {
        // DA is short for "definitive article". source: https://en.wikipedia.org/wiki/The
        // variable names is named after the iso 3166 standard. reference: https://en.wikipedia.org/wiki/ISO_3166-2
    "DK": {
        "days": [
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lørdag",
            "Søndag"
        ],
        "months": [
            "Januar",
            "Februar",
            "Marts",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "December"
        ],
        "controlPanel": {
          "toggleClock": "Klokke kontakt",
          "toggleCalendar": "Kalender kontakt",
          "changeLanguage": "Skift sprog",
          "theme": "Tema"
        },
        "DA": "Den",
        "OS": false
    },
    "GB": {
        "days": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "months": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "controlPanel": {
          "toggleClock": "Toggle clock",
          "toggleCalendar": "Toggle calendar",
          "changeLanguage": "change language",
          "theme": "Theme"
        },
        "DA": "",
        "OS": true
        // might be implemented later if other languages needs this
        //"OS": ["st", "nd", "th"]
    }
}
    });

    const handleDataChange = (newData) => {
      setData(newData);
    };
    

    return(
      <div className="app" style={{ display: 'flex', flexDirection: 'column', gap: '16px' , backgroundColor: data.backgroundColor, color: data.backgroundColor === 'white' ? "black" : "white"}}>
        <ShowClock data={data}/>
        <ShowDate data={data} />
        <ControlPanel onDataChange={handleDataChange} data={data}/>
      </div>
    )
  }

  export default App