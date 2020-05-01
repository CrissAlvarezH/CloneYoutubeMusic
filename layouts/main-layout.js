import Header from '../components/header'
import BottomBar from '../components/bottom-bar'

export default function MainLayout(props) {
    return (
        <div className="h-screen overflow-y-scroll">
            <Header />

            <div className="fixed bottom-0 w-full sm:hidden z-10">
                <BottomBar />
            </div>

            {props.children}
        </div>
    )
}