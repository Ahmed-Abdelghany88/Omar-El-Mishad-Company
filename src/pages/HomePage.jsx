import Helmet from '../components/helmet.jsx';
import Hero from '../sections/hero.homepage.jsx';
import About from '../sections/About.homepage.jsx';
import Photos from '../sections/Photos.homepag.jsx';
import SwiperSection from '../sections/Swiper.homepage.jsx';
import Team from "../sections/Team.homepage.jsx";
import Contacts from '../sections/Contacts.homepage.jsx';

const HomePage = () => {
  return (
    <div>
     <Helmet/>
        <Hero/>
        <About/>
        <Photos/>
        <SwiperSection/>
        <Team/>
      <Contacts />
    </div>
  )
}
export default HomePage;
