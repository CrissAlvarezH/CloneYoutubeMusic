
export default function Search(props) {

    return (
        <div className="bg-gray-800 text-gray-400 rounded border-gray-700 border-2">
            <div className="flex px-3 py-1">

                <svg className="text-gray-400 fill-current cursor-pointer p-2 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <polygon points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9"/>
                </svg>

                <input className="text-xl text-gray-400 placeholder-gray-600 bg-gray-800 p-1 ml-2 w-full" type="text" placeholder="Buscar"/>

            </div>

            <hr className="border-gray-700" />

            <ul className="">
                {
                    [1,2,3,4,5,6].map(elem => (
                        <li className="flex justify-between items-center px-3 py-1">
                            <div className="flex items-center">
                                <svg className="fill-current w-10 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/>
                                </svg>

                                <p className="ml-2">Busqueda reciente</p>
                            </div>

                            <p className="text-xs">Quitar</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}