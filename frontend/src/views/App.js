import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import GameCreate from './components/GameCreate';
import MyGames from './components/MyGames';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PCList from './components/PCList';
import MyPCs from './components/MyPCs';
import PCEdit from './components/PCEdit';
import PCCreate from './components/PCCreate';
import NPCCreate from './components/NPCCreate';
import NPCList from './components/NPCList';
import MyNPCs from './components/MyNPCs';
import MyItems from './components/MyItems';
import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';
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
            <Link to='/signup/'>Sign up</Link>
          </li>
          <li>
            <Link to='/games/'>Browse Games</Link>
          </li>
          <li>
            <Link to='/games/mine/'>My Games</Link>
          </li>
          <li>
            <Link to='/pcs/'> Browse PCs</Link>
          </li>
          <li>
            <Link to='/pcs/mine/'> My PCs</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/' element={<GameList />} />
          <Route path='/games/edit/:gid' element={<GameEdit />}/>
          <Route path='/games/create/' element={<GameCreate />}/>
          <Route path='/games/mine/' element={<MyGames />}/>
          <Route path='/login/' element={<Login />}/>
          <Route path='/signup/' element={<Signup />}/>
          <Route path='/pcs/' element={<PCList />}/>
          <Route path='/pcs/edit/:id' element={<PCEdit />}/>
          <Route path='/pcs/create/:gid' element={<PCCreate />}/>
          <Route path='/pcs/mine/' element={<MyPCs />}/>
          <Route path='/npcs/' element={<NPCList />}/>
          <Route path='/npcs/mine/:id' element={<MyNPCs />}/>
          <Route path='/npcs/create/:gid' element={<NPCCreate />}/>
          <Route path='/items/create/:pcid' element={<ItemCreate />}/>
          <Route path='/items/edit/:id' element={<ItemEdit />}/>
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
