import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import Main from './home/Main.js';
import './fonts/fonts.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import Login from './components/Login.js';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
};

export default App;
