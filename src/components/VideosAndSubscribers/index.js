import './index.css'

const VideosAndSubscribers = props => {
    const {details} = props
    const {no_of_videos, admin_name, subscribers} = details
    return(
        <div className='videos-and-subscribers-container'>
            <ul>
                <h1>{admin_name}</h1>
                <div className='data-containers'>
                    <div className='videos-box'>
                        <h1 className='data-text'>Videos</h1>
                        <p className='data-text'>{no_of_videos}</p>
                    </div>
                    <div className='videos-box'>
                        <h1 className='data-text'>Subscribers</h1>
                        <p className='data-text'>{subscribers}</p>
                    </div>
                </div>
            </ul>
        </div>
    )
    
}

export default VideosAndSubscribers