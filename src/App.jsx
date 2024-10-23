import './App.css'
import EventOutcomes from './components/EventOutcomes'
import EventSpeakers from './components/EventSpeakers'
import Footter from './components/Footter'
import GetYour from './components/GetYour'
import Hero from './components/Hero'
import LatestNews from './components/LatestNaws'
import Linked from './components/Linked'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-[#161362] w-full min-h-dvh pb-20'>
      <Navbar/>
      <Hero/>
      <Linked/>
      <EventOutcomes/>
      <EventSpeakers/>
      <GetYour/>
      <LatestNews/>


      <Footter/>
    </div>
  )
}

export default App
