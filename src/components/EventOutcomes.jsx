function EventOutcomes(){
    return(
        <div className="w-full">
             <div className="container mx-auto flex flex-col gap-4 items-center text-white">
                <p className="font-extrabold xl:text-2xl">WHY JOIN US</p>
                <h1 className="font-extrabold xl:text-5xl">Event Outcomes</h1>
                <div className="flex flex-wrap justify-evenly mt-10">
                    <div className=" max-w-[400px] flex flex-col p-16 gap-5 hover:bg-[#120f4e]  rounded-xl">
                        <i class="fa-solid fa-microphone text-7xl"></i>
                        <h1 className="text-4xl">Great Speakers</h1>
                        <p className="xl"> How you transform your business as technology, consumer, habits industry dynamic</p>
                    </div>
                    <div className=" max-w-[400px] flex flex-col p-16 gap-5 hover:bg-[#120f4e]  rounded-xl">
                        <i class="fa-solid fa-users text-7xl"></i>
                        <h1 className="text-4xl">New People</h1>
                        <p className="xl"> How you transform your business as technology, consumer, habits industry dynamic</p>
                    </div>
                    <div className=" max-w-[400px] flex flex-col p-16 gap-5 hover:bg-[#120f4e]  rounded-xl">
                    <i class="fa-solid fa-filter text-7xl"></i>
                        <h1 className="text-4xl">Have Fun</h1>
                        <p className="xl"> How you transform your business as technology, consumer, habits industry dynamic</p>
                    </div>
                </div>

             </div>
        </div>
    )
}

export default EventOutcomes