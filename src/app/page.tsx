import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroFifth from "./components/HeroFifth";
import HeroFourth from "./components/HeroFourth";
import HeroOne from "./components/HeroOne";
import HeroSecond from "./components/HeroSecond";
import HeroSeventh from "./components/HeroSeventh";
import HeroSixth from "./components/HeroSixth";
import HeroThird from "./components/HeroThird";





function Homepage(){
  return(
    <div className="bg-blue-50">
    <Header />
    <HeroOne />
    <HeroSecond />
    <HeroThird />
    <HeroFourth />
    <HeroFifth />
    <HeroSixth />
    <HeroSeventh />
    <Footer />
    </div>
  );
}

export default Homepage