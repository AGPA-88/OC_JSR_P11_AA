import './title.css'

function Title({title, location}) {

    return(
        <div className='house-name'>
            <div className='house-title'>
                {title}
            </div>
            <div className='house-location'>
                {location}
            </div>
      </div>
    )
}

export default Title;