
export default function BottomBar(props){
    
    return (
        <ul className="flex justify-around bg-gray-900 px-1 text-white text-gray-600 cursor-pointer shadow">

            <li className="px-5 py-4 flex-grow flex justify-center text-white" >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
                </svg>
            </li>

            <li className="px-5 py-4 flex-grow flex justify-center" >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 0s8 7.58 8 12a8 8 0 1 1-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0 0 10 6V0zM8 0a3 3 0 1 0 0 6V0z"/>
                </svg>
            </li>

            <li className="px-5 py-4 flex-grow flex justify-center" >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
            </li>

            <li className="px-5 py-4 flex-grow flex justify-center" >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            </li>

        </ul>
    )
}