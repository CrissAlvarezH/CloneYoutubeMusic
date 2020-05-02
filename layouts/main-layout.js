import Header from '../components/header'
import BottomBar from '../components/bottom-bar'
import Search from '../components/search'

import Router from 'next/router'

import {connect} from 'react-redux' 

import {showSearch} from '../redux/reducers/search'


function MainLayout(props) {
    const {isShowSearch, dispatch} = props

    let eventsMenu = {
        onClickHome: () => Router.push('/'),
        onClickHotlist: () => Router.push('/hotlist'),
        onClickLibrary: () => Router.push('/'),
        onClickSearch: () => dispatch(showSearch())
    }

    return (
        <div className="h-screen overflow-y-scroll">
            <Header {...eventsMenu}/>

            <div 
                className={"absolute w-full mt-3 top-0 flex justify-center z-20" + (!isShowSearch ? " hidden " : "")}
                >
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

const mapStateToProps = state => {
    return {
        isShowSearch: state.search.showSearch
    }
}

export default connect(mapStateToProps)(MainLayout)