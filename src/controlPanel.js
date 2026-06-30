import { useState } from "react";
import './controlPanel.css'

const ControlPanel = ({onDataChange, data}) => {

    const handleChange = (event) => {
        onDataChange(event.target.checked ? {...data, backgroundColor: 'white'}: {...data, backgroundColor: 'black'});
    };

    const [btnTrigger, setBtnTrigger] = useState(false)

    return (<>
    <img onClick={() => {setBtnTrigger(!btnTrigger)}} src="https://www.svgrepo.com/show/532244/gear.svg" alt="Gear icon" style={{filter: btnTrigger ? null : "invert(100%)"}}/>
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
        </div>
        : null
    }
    </>)
}

export default ControlPanel