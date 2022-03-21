import { useState } from "react";
import Brand from "./Brand.js";
import Navlinks from "./Navlinks.js";

function Header() {
    const [isNavlinksVisible, setNavbarVisible] = useState(true)

    return (
        <nav className="flex items-center justify-between flex-col bg-gradient-to-r from-zinc-800 via-[#b8a667] to-zinc-800 fixed w-full pin-t lg:px-10 lg:flex-row">
            <div className="px-3 flex justify-between flex-1 w-full items-center">
                <Brand />
                <div className="block lg:hidden mr-2">
                    <button className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white"
                        onClick={() => setNavbarVisible(!isNavlinksVisible)}>
                        <svg className="fill-current h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
            </div>

            <Navlinks isVisible={isNavlinksVisible} />
        </nav>
    );
}

export default Header;