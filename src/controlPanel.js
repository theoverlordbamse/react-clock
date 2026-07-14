import { useState } from "react";
import './controlPanel.css'

const ControlPanel = ({onDataChange, data}) => {


    const keys = Object.keys(data.langWords)

    const handleChange = (event) => {
        onDataChange(event.target.checked ? {...data, backgroundColor: 'white'}: {...data, backgroundColor: 'black'});
        console.log(data.backgroundColor)
    };

    const handleLangChange = (event) => {
        onDataChange({...data, lang: event.target.value})
    }

    const handleClockToggle = (event) => {
        onDataChange(event.target.checked ? {...data, toggleClock: false}: {...data, toggleClock: true})
    }

    const handleCalendarToggle = (event) => {
        onDataChange(event.target.checked ? {...data, toggleCalendar: false}: {...data, toggleCalendar: true})
    }

    const [btnTrigger, setBtnTrigger] = useState(false)

    return (<>
    {/* mechanism for toggling color for the gear for the option menu*/}
    <img onClick={() => {setBtnTrigger(!btnTrigger)}} src="https://www.svgrepo.com/show/532244/gear.svg" alt="Gear icon" style={{filter: data.backgroundColor === "black" ? "invert(100%)" : btnTrigger || data.backgroundColor === "white" ? null : "invert(100%)"}}/>
    { // need to fix bug where when the controlpanel is hidden the toggles isnt toggled to their actual state
        btnTrigger ? 
        <div className="controlPanel">
            <div className="option toggleTheme">
                <h5>
                    {data.langWords[data.lang].controlPanel.theme}
                </h5>
                <input type="checkbox" onChange={handleChange} />
            </div>
            <div className="option toggleClock"> 
                <h5>
                    {data.langWords[data.lang].controlPanel.toggleClock}
                </h5>
                <input type="checkbox" onChange={handleClockToggle} value={data.toggleClock} />
            </div>
            <div className="option toggleCalendar">
                <h5>
                    {data.langWords[data.lang].controlPanel.toggleCalendar}
                </h5>
                <input type="checkbox" onChange={handleCalendarToggle} value={data.toggleCalendar} />
            </div>
            <div className="option language">
                <h5>
                    {data.langWords[data.lang].controlPanel.changeLanguage}
                </h5>
                <select  value={data.lang} onChange={handleLangChange}>
                    {keys.map((item) => (<option key={item}>{item}</option>))}
                </select>
            </div>
        </div>
        : null
    }
    </>)
}

export default ControlPanel