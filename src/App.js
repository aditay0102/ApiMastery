
import './App.css';
import WeathreApp from './Components/Assets/WeatherApp/WeathreApp';
import './Components/Assets/WeatherApp/Weather.css'

import  NewsApp  from './Components/NewsApp/NewsApp';
import './Components/NewsApp/NewsApp.css';

import CryptoApp from './Components/CryptoApp/CryptoApp';
import './Components/CryptoApp/CryptoApp.css';


import {  Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className='newsMain'>
        <div className='navbar'>
          
            <Link className='li' to="/">Weather App</Link>
            <Link className='li' to="/news">News App</Link>
            <Link className='li' to="/Crypto">Crypto</Link>
        </div>

      <Routes>
        <Route path='/' element={<WeathreApp/>}/>
        <Route path='/news' element={<NewsApp/>}/>
        <Route path='/crypto' element={<CryptoApp/>}/>
      </Routes>

    </div>
  );
}

export default App;
