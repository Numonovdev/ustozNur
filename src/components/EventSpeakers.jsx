import imgas from '../img/speaker1.jpg'

function EventSpeakers(){
    return(
        <div className="w-full mt-40">
             <div className="container mx-auto flex flex-col gap-4 items-center text-white">
                <p className="font-extrabold xl:text-2xl">WHY JOIN US</p>
                <h1 className="font-extrabold xl:text-5xl">Event Outcomes</h1>
                <div className="flex flex-wrap justify-evenly mt-10">
                    <div className="flex-col flex p-2 items-center hover:opacity-50 gap-2">
                        <img src={imgas} className="max-w-[300px] w-72 rounded-full" alt="" />
                        <h1 className="font-extrabold xl:text-xl">Henri Robert</h1>
                        <p className="font-extrabold xl:text-sm">Founder Cards</p>
                    </div>
                    <div className="flex-col flex p-2 items-center hover:opacity-50 gap-2">
                        <img src={imgas} className="max-w-[300px] w-72 rounded-full" alt="" />
                        <h1 className="font-extrabold xl:text-xl">Henri Robert</h1>
                        <p className="font-extrabold xl:text-sm">Founder Cards</p>
                    </div>
                    <div className="flex-col flex p-2 items-center hover:opacity-50 gap-2">
                        <img src={imgas} className="max-w-[300px] w-72 rounded-full" alt="" />
                        <h1 className="font-extrabold xl:text-xl">Henri Robert</h1>
                        <p className="font-extrabold xl:text-sm">Founder Cards</p>
                    </div>
                    <div className="flex-col flex p-2 items-center hover:opacity-50 gap-2">
                        <img src={imgas} className="max-w-[300px] w-72 rounded-full" alt="" />
                        <h1 className="font-extrabold xl:text-xl">Henri Robert</h1>
                        <p className="font-extrabold xl:text-sm">Founder Cards</p>
                    </div>
                </div>

             </div>
        </div>
    )
}

export default EventSpeakers