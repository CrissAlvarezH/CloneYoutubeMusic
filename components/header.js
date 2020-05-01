
export default function Header(props) {
    
    let onClickPrincipal = () => {
        console.log('Click en principal')
    }

    let onClickHotlist = () => {
        console.log('Click en Hotlis')
    }

    let onClickBiblioteca = () => {
        console.log('Click en Biblioteca')
    }

    let onClickBuscar = () => {
        console.log('Click en Buscar')
    }


    return (
        <div className="relative h-16 bg-black w-full">
            <div className="flex justify-between items-center w-full h-full px-5">

                <img 
                    className="h-6"
                    alt="logo youtube"
                    src="https://s.ytimg.com/yts/img/music/web/on_platform_logo_dark-vfl_PUy2j.svg"/>

                <img 
                    className="rounded-full w-10 h-10 object-cover"
                    alt="profile picture"
                    src="https://definicionde.es/wp-content/uploads/2019/04/definicion-de-persona-min.jpg"/>
            </div>

            {/* center the menu (responsive: long screen desktop)*/}
            <div className="w-full absolute top-0 justify-center items-center h-full hidden md:flex">
                <ul className="flex text-white text-xl text-gray-600 font-medium cursor-pointer">
                    <li className="md:px-4 lg:px-8 text-white" onClick={onClickPrincipal}>Principal</li>

                    <li className="md:px-4 lg:px-8" onClick={onClickHotlist}>Hotlist</li>
                    
                    <li className="md:px-4 lg:px-8" onClick={onClickBiblioteca}>Biblioteca</li>
                    
                    <li className="px-5 flex items-center" onClick={onClickBuscar}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                        <p className="ml-3">Buscar</p>
                    </li>
                </ul>
            </div> 

            {/* menu icons (responsive: medium long screen) */}
            <div className="w-full absolute top-0 justify-center items-center h-full hidden sm:flex md:hidden">
                <ul className="flex text-white text-xl text-gray-600 font-medium cursor-pointer">
                    <li className="px-5 text-white" onClick={onClickPrincipal}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
                        </svg>
                    </li>

                    <li className="px-5" onClick={onClickHotlist}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 0s8 7.58 8 12a8 8 0 1 1-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0 0 10 6V0zM8 0a3 3 0 1 0 0 6V0z"/>
                        </svg>
                    </li>

                    <li className="px-5 " onClick={onClickBiblioteca}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </li>

                    <li className="px-5" onClick={onClickBuscar}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                    </li>
                </ul>
            </div> 
        </div>
    )
}