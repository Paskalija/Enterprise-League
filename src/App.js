import React from 'react';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import './css/index.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import Press from './Press';
import InTheNews from './inTheNews';
import Footer from "./Footer";
import Popup from './Popup';
import Ooops from './ooops';



export function App () {
  
  return (
       <div className="App">
       <Header />
       <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<InTheNews/>} />
          <Route path = '/Press' element = {<Press/>} />
          <Route path = '/ooops' element = {<Ooops/>} />
        </Routes>
        </BrowserRouter>
        <Popup/>  
        <Footer/>
      </div>

  );
}
