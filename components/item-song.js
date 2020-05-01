
export default function ItemSong(props) {
    let {url_img, title, type, singer} = props

    let isRoundedImg = type === 'Channel'
    let isLarge = type === 'Video'

    return (    
        <div className="flex-shrink-0 text-white pr-6">
            <img 
                className={
                    "h-48 object-cover" + (isRoundedImg ? " rounded-full " : " rounded ") + (isLarge ? " w-64 " : " max-w-2xl ")
                }
                alt="Image from album"
                src={url_img}/>

            <p className="text-lg mt-4 font-medium">{title}</p>

            <div className="flex text-base text-gray-500 leading-5">
                <p>{type}</p>
                <span className="mx-1"> • </span>
                <p>{singer}</p>
            </div>
        </div>
    )
}