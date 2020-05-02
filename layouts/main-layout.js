import Header from '../components/header'
import BottomBar from '../components/bottom-bar'
import Search from '../components/search'

import Router from 'next/router'

export default function MainLayout(props) {

    let eventsMenu = {
        onClickHome: () => Router.push('/'),
        onClickHotlist: () => Router.push('/hotlist'),
        onClickLibrary: () => Router.push('/'),
        onClickSearch: () => Router.push('/'),
    }

    return (
        <div className="h-screen overflow-y-scroll">
            <Header {...eventsMenu}/>

            <div className="absolute w-full mt-3 top-0 flex justify-center hidden">
                <div className="w-9/10 sm:w-3/5">
                    <Search />
                </div>
            </div>

            <div className="fixed bottom-0 w-full sm:hidden z-10">
                <BottomBar {...eventsMenu}/>
            </div>

            {props.children}
        </div>
    )
}