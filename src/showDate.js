import './showDate.css'

const ShowDate = ({data}) => {



    const date = new Date()

    return (
        <div className='date'>
            <div className='day'>
                <p style={{ display: 'inline' }}>
                    {data.dayNames[data.lang].days[date.getDay() === 0 ? 6 : date.getDay() -1] + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {data.dayNames[data.lang].DA + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {date.getDate() + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {data.dayNames[data.lang].months[date.getMonth() - 1]}
                </p>
            </div>
        </div>
    )

}

export default ShowDate