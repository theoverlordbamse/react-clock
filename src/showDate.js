import './showDate.css'

const ShowDate = ({data}) => {
    const dayNames = {
        'Danish': ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag', 'Den'],
        'English': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'The']
    }

    const monthNames = {
        'Danish': ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December']
    }

    const date = new Date()

    return (
        <div className='date'>
            <div className='day'>
                <p style={{ display: 'inline' }}>
                    {dayNames.Danish[date.getDay() === 0 ? 6 : date.getDay() -1] + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {dayNames.Danish[7] + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {date.getDate() + ' '}
                </p>
                <p style={{ display: 'inline' }}>
                    {monthNames.Danish[date.getMonth() - 1]}
                </p>
            </div>
        </div>
    )

}

export default ShowDate