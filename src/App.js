  import {useState} from "react";
  import React from "react";

  import './App.css'

  import ShowDate from "./showDate";
  import ControlPanel from "./controlPanel";
  import ShowClock from "./showClock";

  const App = () => {

    const [data, setData] = useState({
      //toggles the between black and white
      'backgroundColor': false,
      // selects the currently selected language
      'lang': 'GB',
      // a list for the <select> in controlpanel.js that supplies the available languages
      'languages': ['DK', 'GB'],

      "dayNames": {
        // DA is a abbreviation for "definitive article". source: https://en.wikipedia.org/wiki/The
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
        "DA": "Den"
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
        "DA": "The"
    }
}
    });

    const handleDataChange = (newData) => {
      setData(newData);
    };
    

    return(
      <div className="app" style={{ display: 'flex', flexDirection: 'column', gap: '16px' , backgroundColor: data.backgroundColor, color: data.backgroundColor === 'white' ? "black" : "white"}}>
        <ShowClock />
        <ShowDate data={data} />
        <ControlPanel onDataChange={handleDataChange} data={data}/>
      </div>
    )
  }

  export default App