import { useState } from "react";
import './controlPanel.css'

const ControlPanel = ({onDataChange, data}) => {


    const keys = Object.keys(data.dayNames)

    const handleChange = (event) => {
        onDataChange(event.target.checked ? {...data, backgroundColor: 'white'}: {...data, backgroundColor: 'black'});
    };

    // Skal fikse bug hvor man skal trykke på et sprog 2 gange for at den opdaterer
    const handleLangChange = (event) => {
        setLanguage(event.target.value)
        console.log(language)
        console.log(data.dayNames[language].days[0])
        onDataChange({...data, lang: language})
    }

    const [btnTrigger, setBtnTrigger] = useState(false)
    const [language, setLanguage] = useState(data.lang)

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