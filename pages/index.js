import './../styles.css'
import MainLayout from '../layouts/main-layout'
import ListHorizontal from './../components/list-horizontal'

import { favorites, night_music } from './../data.example.json'


export default () => {
    return (
        <MainLayout>
            <div className="pb-32">
                
                <div className="mt-0 sm:mt-6">
                    <ListHorizontal title="Tus favoritos" list={favorites}/>
                </div>

                <div className="mt-10 sm:mt-24">
                    <p className="text-base sm:text-lg text-gray-600 uppercase ml-4 sm:ml-12">VOLVER A ESCUCHAR</p>
                    <ListHorizontal title="Tus música para la noche" list={night_music}/>
                </div>

            </div>
        </MainLayout>
    )
}