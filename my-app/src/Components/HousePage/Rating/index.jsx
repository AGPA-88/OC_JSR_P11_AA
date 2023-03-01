import './rating.css'

function Rating({rating}) {
    let fullStars = []
    let emptyStars = []
    for (let i = 0 ; i < Math.round(rating); i++) {fullStars.push('full')};
    for (let i = 0 ; i < 5-Math.round(rating); i++) {emptyStars.push('empty')};

    return(
        <div className='ratings'>
            {fullStars.map((star, index) => {
                return <i className='fa-solid fa-star' key={index}></i>
            })}
            {emptyStars.map((star, index) => {
                return <i className='fa-regular fa-star' key={index}></i>
            })}

        </div>
        
    )
}

export default Rating;