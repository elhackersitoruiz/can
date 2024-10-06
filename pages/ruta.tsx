import './global.css';
import Banner from '../src/app/components/Banner/index';
import Features from '../src/app/components/Work/index';
import Cook from '../src/app/components/Cook/index';
import Expert from '../src/app/components/Expert/index';
import Gallery from '../src/app/components/Gallery/index';
import Listuser from '../src/app/components/Admin/list';
import CarnetVacunacion from '../src/app/components/Admin/register';


export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Listuser />
      <CarnetVacunacion />
    </main>
  )
}
