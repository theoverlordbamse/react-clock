import { useState , useEffect } from "react";

const ShowClock = (onDataChange, data) => {
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
    return time
}

export default ShowClock