import { Link } from 'react-router-dom'
import logo from '../img/imgLogo.png'

function Navbar(){
    return(
        <div className="w-full sticky"> {/*    */}
            
            <div className="container mx-auto xl:h-20 text-white lg:h-20 md:h-16 sm:h-14  flex items-center justify-around">
                <img className='xl:h-12 md:h-10 cursor-pointer' src={logo} alt="" />
                <ul className="menu-horizontal flex gap-1">
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>HOME</Link></li>
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>SPONSORS</Link></li>
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>ABOUT</Link></li>
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>SPEAKERS</Link></li>
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>SCHEDULES</Link></li>
                  <li className='px-2 py-1 rounded  hover:bg-blue-900'><Link>BLOG</Link></li>
                </ul>
            </div>
        
        </div>
    )
}
export default Navbar