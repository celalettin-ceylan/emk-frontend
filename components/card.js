function Card({id, img, description, title, date}) {
    const logId = () => { console.log(id);}
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-80 m-3">
            <img className="w-full object-cover h-48" src={img} alt="kahvalti"/>
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <p className="text-gray-700 text-base italic">
                    {date}
                </p>
            </div>
            <div className="px-4 pb-3 flex w-full">
                <a className="flex-initial bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-48 text-center" onClick={()=> logId()}> Kaydol </a>
                <a className="flex-initial bg-red-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-48 text-center"> Incele </a>
            </div>
        </div>
    );
}

export default Card;