import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import GameCreate from './components/GameCreate';
import MyGames from './components/MyGames';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>
            <Link to='/games/'>Browse Games</Link>
          </li>
          <li>
            <Link to='/games/mine/2'>My Games</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/' element={<GameList />} />
          <Route path='/games/edit/:id' element={<GameEdit />}/>
          <Route path='/games/create/:id' element={<GameCreate />}/>
          <Route path='/games/mine/:id' element={<MyGames />}/>
          <Route path='/login/' element={<Login />}/>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
