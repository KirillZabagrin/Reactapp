import React from 'react'
import './App.css';
import Messages from './Components/Messages/Messages';
import Header from './Components/Header/Header';
import Musik from './Components/Musik/Musik';
import Navbar from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route exact path='/news' component={News} />
          <Route exact path='/musik' component={Musik} />
          <Route exact path='/settings' component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}





export default App;
