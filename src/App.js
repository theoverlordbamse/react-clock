  import { useEffect , useState} from "react";
  import React from "react";

  import './App.css'

  import ShowDate from "./showDate";
  import ControlPanel from "./controlPanel";

  const App = () => {

    const [data, setData] = useState({
      'backgroundColor': false,
      'lang': 'GB'
    });

    const handleDataChange = (newData) => {
      setData(newData);
    };

    const [time, setTime] = useState('00:00:00')
    const [colonState, setColonState] = useState(true)

    useEffect(
      () => {

        const timerInterval = setInterval(() => {

          const showTime = () => {
            const date = new Date();
            return (<>
                  <p>
                    {date.getHours() <= 9 ? '0' + date.getHours() : date.getHours()}
                    <span className={colonState ? 'colon' : 'colon-blank'}>
                      :
                    </span>
                    {date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()}
                    <span className={colonState ? 'colon' : 'colon-blank'}>
                      :
                    </span>
                    {date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()}
                  </p>
              </>)
          }

          
          setTime(showTime)
          setColonState(!colonState)
          
        }, 500);

        return () => clearInterval(timerInterval);
      }
    )

    

    return(
      <div className="app" style={{ display: 'flex', flexDirection: 'column', gap: '16px' , backgroundColor: data.backgroundColor, color: data.backgroundColor === 'white' ? "black" : "white"}}>
        <div className="time">
            {time}
        </div>
          <ShowDate/> {/* tilføj data={data} til ShowDate hvis du skal sende noget data fra ControlPanel */}
          <ControlPanel onDataChange={handleDataChange} data={data}/>
      </div>
    )
  }

  export default App