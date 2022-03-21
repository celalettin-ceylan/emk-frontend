export default function () {
    return (
        <div className="flex items-center flex-no-shrink text-white">
            <a className="text-white no-underline hover:text-white hover:no-underline flex items-center" href="#">
                <img src="/emk.png" className="w-14 md:w-20 bg-slate-100 border-4 border-zinc-600 rounded-full" />
                <div>
                    <p className="text-l md:text-2xl pl-2">Enderûn Mühendislik Kulübü</p>
                    <p className="text-md md:text-l pl-2 italic">❝ Yerli ve Millî Şuurla...❞</p>
                </div>
            </a>
        </div>
    );
}