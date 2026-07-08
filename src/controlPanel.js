import { useState } from "react";
import './controlPanel.css'

const ControlPanel = ({onDataChange, data}) => {


    const keys = Object.keys(data.dayNames)

    const handleChange = (event) => {
        onDataChange(event.target.checked ? {...data, backgroundColor: 'white'}: {...data, backgroundColor: 'black'});
        console.log(data.backgroundColor)
    };

    const handleLangChange = (event) => {
        onDataChange({...data, lang: event.target.value})
    }

    const [btnTrigger, setBtnTrigger] = useState(false)

    return (<>
    {/* mechanism for toggling color for the gear for the option menu*/}
    <img onClick={() => {setBtnTrigger(!btnTrigger)}} src="https://www.svgrepo.com/show/532244/gear.svg" alt="Gear icon" style={{filter: data.backgroundColor === "black" ? "invert(100%)" : btnTrigger || data.backgroundColor === "white" ? null : "invert(100%)"}}/>
    {
        btnTrigger ? 
        <div className="controlPanel">
            <div className="option toggleTheme">
                <h5>
                    Theme
                </h5>
                <input type="checkbox" onChange={handleChange} />
            </div>
            <div className="option toggleClock"> 
                <h5> {/* planlægger at implementere en kontakt til at vise klokken*/}
                    toggle clock
                </h5>
                <input type="checkbox" />
            </div>
            <div className="option language">
                <h5>
                    Change language
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