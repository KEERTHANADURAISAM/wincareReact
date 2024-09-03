
import About from './components/pages/About';
import AboutCounters from './components/pages/AboutCounters';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import GetInPage from './components/pages/GetInPage';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import SignIn from './components/pages/SignIn';


function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <SignIn/> */}
  <Home/>
  <About/>
  <AboutCounters/>
  <Service/>
  <GetInPage/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
