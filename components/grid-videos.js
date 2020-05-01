import ItemVideo from './item-video'

export default function GridVideos(props) {
    let { videos } = props

    return (
        <div className="flex flex-wrap">
            {
                videos.map(video => (
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <ItemVideo {...video}/>
                    </div>
                ))
            }
        </div>
    )
}