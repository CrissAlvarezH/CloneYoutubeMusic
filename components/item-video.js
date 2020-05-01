
export default function ItemVideo(props) {
    let {url_img, title, singer, views} = props

    return (
        <div 
            className="p-px relative h-48 sm:h-96">

            <img 
                className="w-full h-full object-cover rounded"
                alt="Face of video"
                src={url_img}/>

            <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>

            <div className="absolute bottom-0 w-full text-white p-2 sm:p-5">
                <p className="text-xl sm:text-3xl font-extrabold">{title}</p>

                <div className="flex">
                    <p className="text-xs sm:text-base">{singer}</p>
                    <span className="mx-1"> • </span>
                    <p className="text-xs sm:text-base">{views}</p>
                </div>
            </div>
        </div>
    )
}