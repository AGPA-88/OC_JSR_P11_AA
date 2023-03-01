import './title.css'

function Title({title, location}) {

    return(
        <div className='house-location'>
            <h1>
                {title}
            </h1>
            <p>
                {location}
            </p>
      </div>
    )
}

export default Title;