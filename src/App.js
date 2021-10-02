import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/Navbar/NavbarMobile';
import BannerTop from './Components/Banner/Banner';
import AboveCourses from './Components/AboveCourses/AboveCourses';
import Courses from './Components/Courses/Course';
import English from './Components/EnglishCourses/English';
import Categories from './Components/Categories/Categories';
import Featured from './Components/Featured/Featured';
function App() {
  return (
    <div className="app">
        <Navbar />
        <NavbarMobile />
        <BannerTop />
        <AboveCourses />
        <Courses />
        <English />
        <Categories />
        <Featured />
    </div>
  );
}

export default App;
