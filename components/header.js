
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

            {/* center the menu (wid*/}
            <div className="w-full absolute top-0 flex justify-center items-center h-full">
                <ul className="flex text-white text-xl text-gray-600 font-medium cursor-pointer">
                    <li className="px-8 text-white" onClick={onClickPrincipal}>Principal</li>
                    <li className="px-8" onClick={onClickHotlist}>Hotlist</li>
                    <li className="px-8" onClick={onClickBiblioteca}>Biblioteca</li>
                    <li className="px-5 flex items-center" onClick={onClickBuscar}>
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                        <p className="ml-3">Buscar</p>
                    </li>
                </ul>
            </div> 
        </div>
    )
}