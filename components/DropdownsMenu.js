import Link from "next/link";

export default function DropdownsMenu({ menu }) {
    return (
        <div className="relative group box-border flex justify-center flex-col lg:flex-row">
            <Link href="#">
                <a className="block lg:flex lg:items-center bg-white h-10 pl-3 lg:px-4 lg:mx-4 lg:bg-inherit lg:text-white lg:h-20 group-hover:bg-zinc-800">
                    {menu.header}
                </a>
            </Link>
            <div className={`bg-zinc-800 hidden lg:absolute lg:border-[1px] lg:border-white lg:top-20 group-hover:block lg:z-20 lg:rounded-md`}>
                {menu.links.map(link =>
                    <Link href={link.uri}>
                        <a className="block text-white py-2 pl-6 lg:text-center lg:p-2 lg:m-2 lg:w-48 lg:rounded-md hover:text-black hover:bg-white">
                            {link.text}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
}