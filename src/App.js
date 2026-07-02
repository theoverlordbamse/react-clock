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
      'languages': ['DK', 'GB']
    });

    const handleDataChange = (newData) => {
      setData(newData);
    };
    

    return(
      <div className="app" style={{ display: 'flex', flexDirection: 'column', gap: '16px' , backgroundColor: data.backgroundColor, color: data.backgroundColor === 'white' ? "black" : "white"}}>
        <ShowClock />
        <ShowDate/> {/* tilføj data={data} til ShowDate hvis du skal sende noget data fra ControlPanel */}
        <ControlPanel onDataChange={handleDataChange} data={data}/>
      </div>
    )
  }

  export default App