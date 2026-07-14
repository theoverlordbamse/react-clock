import './showDate.css'

const ShowDate = ({data}) => {

    const returnOs = (input) => {
        // this is for parsing the input
    const n = Math.abs(parseInt(input, 10));
        // honestly dont know what this do
    const lastNumber = n % 10;

        if (lastNumber === 1 ) {
            return "st"
        }

        if (lastNumber === 2 ) {
            return "nd"
        }

        if (lastNumber === 3 ) {
            return "rd"
        }
        else {
            return "th"
        }
        
    }

    const date = new Date()


    return (
    <div className='date'>
            {data.toggleCalendar && (
                <div className='day'>
                    <p style={{ display: 'inline' }}>
                        {data.langWords[data.lang].DA ? data.langWords[data.lang].days[date.getDay() === 0 ? 6 : date.getDay() -1] + ' ': data.langWords[data.lang].days[date.getDay() === 0 ? 6 : date.getDay() -1]}
                    </p>
                    <p style={{ display: 'inline' }}>
                        {data.langWords[data.lang].DA ? data.langWords[data.lang].DA + ' ' : ", "}
                    </p>
                    <p style={{ display: 'inline' }}>
                        {`${date.getDate()}${data.langWords[data.lang].OS ? returnOs(date.getDate()) : ""} `}
                    </p>
                    <p style={{ display: 'inline' }}>
                        {data.langWords[data.lang].months[date.getMonth() - 1]}
                    </p>
                </div>
            )}
    </div>
    )

}

export default ShowDate