import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Vist from './components/Carnet/index';
import Vista from './components/Admin/index';
import Register from './components/Register/index';
import Registers from './components/Register/list';



export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Vist/>
      <Vista/>
      <Register/>
      <Registers/>
    </main>
  )
}
