import './../styles.css'
import Header from './../components/header'
import ListHorizontal from './../components/list-horizontal'

import { favorites, night_music } from './../data.example.json'


export default () => {
    return (
        <div className="pb-32">
            <Header />

            <div className="mt-6">
                <ListHorizontal title="Tus favoritos" list={favorites}/>
            </div>

            <div className="mt-24">
                <p className="text-lg text-gray-600 uppercase ml-12">VOLVER A ESCUCHAR</p>
                <ListHorizontal title="Tus música para la noche" list={night_music}/>
            </div>
        </div>
    )
}