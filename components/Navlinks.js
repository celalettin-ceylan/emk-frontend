import DropdownsMenu from "./DropdownsMenu";
import Link from "next/link"
export default function Navlinks({isVisible}) {
    return (
        <div className={`w-full h-screen flex-1 border-t border-white lg:w-auto lg:h-16
             lg:block lg:pt-0 lg:border-0 `  + ( isVisible ? " visible" : " hidden")}>
                <div className="justify-end flex-1 items-center lg:flex lg:h-16 lg:m-0">
                    <DropdownsMenu menu={{header:"Kurumsal", 
                                        links:[
                                            {uri:"/yonetim-kurulu",text:"Yönetim Kurulu"},
                                            {uri:"/danisma-kurulu",text:"Danışma Kurulu"},
                                            {uri:"/denetim-kurulu",text:"Denetim Kurulu"},
                                            {uri:"/subeler",text:"Şubeler ve Temsilcilikler"},
                                            {uri:"/hakkımızda",text:"Hakkımızda"}
                                            ]}}/>

                    <DropdownsMenu menu={{header:"Faliyetlerimiz", 
                                        links:[
                                            {uri:"/teknoloji",text:"Teknoloji"},
                                            {uri:"/teknokamp",text:"Teknokamp"},
                                            {uri:"/hamilik",text:"Hamilik"},
                                            {uri:"/seminerler",text:"Seminerler"},
                                            {uri:"/komisyonlar",text:"İhtisas Komisyonlarımız"}
                                            ]}}/>
                    <div>
                        <Link href="/duyurular"><a className="block bg-white py-2 pl-3 lg:mr-1 lg:px-4 lg:bg lg:bg-inherit lg:text-white">Duyurular</a></Link>
                    </div>
                    <div>
                        <Link href="/iletisim"><a className="block bg-white py-2 pl-3 lg:px-4 lg:bg-inherit lg:text-white" href="/hakkimizda">İletişim</a></Link>
                    </div>
                </div>
            </div>
    );
}