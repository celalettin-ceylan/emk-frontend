function MemberCard({ id, img, name, title}) {
    const logId = () => { console.log(id); }
    return (
        <div className="w-[300px] xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 mr-3">
            <div className="rounded overflow-hidden shadow-md bg-amber-50">
                <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                        <img src={img} className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                </div>
                <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">{name}</div>
                    <p className="text-gray-800 text-sm text-center">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default MemberCard;