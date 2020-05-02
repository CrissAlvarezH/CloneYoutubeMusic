import MainLayout from '../layouts/main-layout'
import GridVideos from '../components/grid-videos'

import { hotlist_videos } from './../data.example.json'


export default () => {
    return (
        <MainLayout>
            <div className="text-white pl-4 sm:pl-12 mt-0 sm:mt-4 mb-5">
                <p className="text-xl sm:text-3xl font-bold">Hotlist de videos</p>
                <p className="text-xs sm:text-sm">Las tendencias mas recientes y geniales</p>
            </div>

            <div className="px-4 sm:px-10 md:px-12">
                <GridVideos videos={hotlist_videos}/>
            </div>
            
        </MainLayout>
    )
}