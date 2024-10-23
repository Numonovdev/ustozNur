import blogimg from '../img/Blog.jpg'
import { Link } from 'react-router-dom'


function LatestNews(){
    return(
        <div className="w-full mt-40">
             <div className="container mx-auto flex flex-col gap-4 items-center text-white">
                <p className="font-extrabold xl:text-2xl">INFO UPDATE</p>
                <h1 className="font-extrabold xl:text-5xl">Latest News</h1>
                <div className="flex flex-wrap w-full justify-evenly mt-10">
                <div className="w-[350px] flex hover:group-last:last:text-pink-600 cursor-pointer bg-[#120f4e] flex-col shadow-2xl items-center">
                    <img src={blogimg} alt="" />
                    <div className='flex p-5 font-bold flex-col  gap-3'>
                        <div className='flex justify-between'>
                            <span className='hover:text-pink-600 cursor-pointer'>EXHOBZ</span>
                            <span>March 10,2019</span>
                        </div>
                        <h1 className='xl:text-2xl'>New Digital Man</h1>
                        <p className='text-base'>There’s such a thing as “too much information”, especially for</p>
                        <Link className='hover:text-pink-600' to='/'>Continue {'->'}</Link>
        
                    </div>
        
                </div>
                <div className="w-[350px] flex hover:group-last:last:text-pink-600 cursor-pointer bg-[#120f4e] flex-col shadow-2xl items-center">
                    <img src={blogimg} alt="" />
                    <div className='flex p-5 font-bold flex-col  gap-3'>
                        <div className='flex justify-between'>
                            <span className='hover:text-pink-600 cursor-pointer'>EXHOBZ</span>
                            <span>March 10,2019</span>
                        </div>
                        <h1 className='xl:text-2xl'>New Digital Man</h1>
                        <p className='text-base'>There’s such a thing as “too much information”, especially for</p>
                        <Link className='hover:text-pink-600' to='/'>Continue {'->'}</Link>
        
                    </div>
        
                </div>
                <div className="w-[350px] flex hover:group-last:last:text-pink-600 cursor-pointer bg-[#120f4e] flex-col shadow-2xl items-center">
                    <img src={blogimg} alt="" />
                    <div className='flex p-5 font-bold flex-col  gap-3'>
                        <div className='flex justify-between'>
                            <span className='hover:text-pink-600 cursor-pointer'>EXHOBZ</span>
                            <span>March 10,2019</span>
                        </div>
                        <h1 className='xl:text-2xl'>New Digital Man</h1>
                        <p className='text-base'>There’s such a thing as “too much information”, especially for</p>
                        <Link className='hover:text-pink-600' to='/'>Continue {'->'}</Link>
        
                    </div>
        
                </div>
                </div>

             </div>
        </div>
    )
}

export default LatestNews