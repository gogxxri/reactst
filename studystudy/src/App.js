import Header from './/components/Header.js'
import Footer from './/components/Footer.js'
import MainHome from './/home/MainHome.js'
import Mainbottom from './/home/Mainbottom.js'
import './App.css';
import './/fonts/fonts.css'


function App() {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <Mainbottom />
      <Footer />
    </div>
  );
}

export default App;