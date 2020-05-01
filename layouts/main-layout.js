import Header from '../components/header'
import BottomBar from '../components/bottom-bar'

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

            <div className="fixed bottom-0 w-full sm:hidden z-10">
                <BottomBar {...eventsMenu}/>
            </div>

            {props.children}
        </div>
    )
}