import { useState } from "react";

function Header(){
    const [isDisplay, setDisplay] = useState(false)
    const handleClick = () => setDisplay(!isDisplay) 
    return (
        <div className="block pb-24">
            <nav className="flex items-center justify-between flex-wrap bg-zinc-800 p-2 fixed w-full z-10 pin-t">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <a className="text-white no-underline hover:text-white hover:no-underline flex items-center" href="#">
                        <img src="/emk.png" className="w-14 md:w-20"/>
                        <div>
                            <p className="text-l md:text-2xl pl-2">Enderûn Mühendislik Kulübü</p>
                            <p className="text-md md:text-l pl-2 italic">❝ Yerli ve Millî Şuurla...❞</p>
                        </div>
                        
                    </a>
                </div>

                <div className="block lg:hidden mr-2">
                    <button className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white" onClick={handleClick}>
                        <svg className="fill-current h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0` + (isDisplay ? " visible" : " hidden")}>
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3 hover:bg-white hover:rounded">
                            <a className="block text-white no-underline hover:text-zinc-800 py-2 px-4" href="#">Etkinlikler</a>
                        </li>
                        <li className="mr-3 hover:bg-white hover:rounded">
                            <a className="block text-white no-underline hover:text-zinc-800 py-2 px-4" href="#">Haberler</a>
                        </li>
                        <li className="mr-3 hover:bg-white hover:rounded">
                            <a className="block text-white no-underline hover:text-zinc-800 py-2 px-4" href="#">Dersler</a>
                        </li>
                        <li className="mr-3 hover:bg-white hover:rounded">
                            <a className="block text-white no-underline hover:text-zinc-800 py-2 px-4" href="#">Yönetim Kurulu</a>
                        </li>
                        <li className="mr-3 hover:bg-white hover:rounded">
                            <a className="block text-white no-underline hover:text-zinc-800 py-2 px-4" href="#">Hakkımızda</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;