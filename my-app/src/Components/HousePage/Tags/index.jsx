import './tags.css'

function Tags(props) {
    return(
        <div className='tags'>
            {props.tags.map(tag => {return <div className='tag' key={tag}>{tag} </div>;})}
        </div>
    )
}

export default Tags;