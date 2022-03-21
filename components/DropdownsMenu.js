import Link from "next/link";
import { useState } from "react";

export default function DropdownsMenu({ menu }) {
    const [isVisible, setVisible] = useState(false);
    return (
        <div className="lg:relative lg:flex lg:justify-center lg:flex-row"
             onClick={() => setVisible( !isVisible )}
             onMouseEnter={() => setVisible(true)}
             onMouseLeave={() => setVisible(false)}   
            >
            <Link href="#">
                <a className={`block lg:flex lg:items-center bg-white h-10 pl-3 lg:px-4 lg:mx-4 lg:bg-inherit lg:text-white lg:h-20 ` + (isVisible ? "lg:bg-zinc-800" : "")}>
                    {menu.header}
                </a>
            </Link>
            <div className={`bg-zinc-800 lg:absolute lg:border-[1px] lg:border-white lg:top-20 lg:z-20 lg:rounded-md` + (isVisible ? " block" : " hidden")}>
                {menu.links.map(link =>
                    <Link href={link.uri} key={link.text}>
                        <a className="block text-white py-2 pl-6 lg:text-center lg:p-2 lg:m-2 lg:w-48 lg:rounded-md lg:hover:text-black lg:hover:bg-white">
                            {link.text}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
}