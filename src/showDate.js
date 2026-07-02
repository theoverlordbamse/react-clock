import './showDate.css'

const ShowDate = ({data}) => {
    

    // DA is a abbreviation for definitive article. source: https://en.wikipedia.org/wiki/The
    // variable names is named after the iso 3166 standard. reference: https://en.wikipedia.org/wiki/ISO_3166-2

const dayNames = {
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

    const date = new Date()

    return (
        <div className='date'>
            <div className='day'>
                <p style={{ display: 'inline' }}>
                    {dayNames.DK.days[date.getDay() === 0 ? 6 : date.getDay() -1] + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {dayNames.DK.DA + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {date.getDate() + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {dayNames.DK.months[date.getMonth() - 1]}
                </p>
            </div>
        </div>
    )

}

export default ShowDate