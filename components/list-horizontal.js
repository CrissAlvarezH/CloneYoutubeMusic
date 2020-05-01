import ItemSong from './item-song'


export default function ListHorizontal(props) {
    let {title, list} = props

    return (
        <div className="flex flex-col pl-12 md:pr-4 lg:pr-12" >
            {/* Title */}
            <p className="text-3xl font-bold text-white mb-6">{title}</p>

            {/* List */}
            <div className="w-full flex overflow-scroll overflow-y-hidden">
                {list.map(item => <ItemSong {...item} key={item.id}/>)}
            </div>
        </div>
    )
}