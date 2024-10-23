function Hero(){
    return(
        <div className="w-full">
          <div className="w-[95%] bg-[#171374] mx-auto">
            <div className="hero container text-white  mx-auto">
              <div className="hero-content flex-col xl:gap-40 lg:gap-10 lg:flex-row-reverse">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className=" w-96 max-w-96 rounded-lg shadow-2xl" />
                <div>
                  <div className="mb-5 rounded-xl py-5 px-2 border-2 border-white flex justify-evenly">
                       <span className="text-pink-600 py-2 px-4 border-r-2 border-white font-black ">10 : 15</span>
                       <span className="text-pink-600 py-2 px-4 border-r-2 border-white font-black ">10 : 15</span>
                       <span className="text-pink-600 py-2 px-4 border-r-2 border-white font-black ">10 : 15</span>
                       <span className="text-pink-600 py-2 px-4  font-black ">10 : 15</span>
                  </div>
                  <h1 className="text-5xl max-w-96 font-bold">Gives you all you need to know</h1>
                  <p className="py-6 max-w-96">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-secondary">BUY TICKET</button>
                </div>
              </div>
            </div>
          </div>   
        </div>
    )
}

export default Hero