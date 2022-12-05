import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import GameCreate from './components/GameCreate';
import MyGames from './components/MyGames';
import Home from './components/Home';
import PC from './components/PC';
import PCList from './components/PCList';
import MyPCs from './components/MyPCs';
import PCEdit from './components/PCEdit';
import NPCList from './components/NPCList';
import MyNPCs from './components/MyNPCs';
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
            <Link to='/games/'>Browse Games</Link>
          </li>
          <li>
            <Link to='/games/mine/2'>My Games</Link>
          </li>
          <li>
            <Link to='/pcs/'> Browse PCs</Link>
          </li>
          <li>
            <Link to='/pcs/mine/10'> My PCs</Link>
          </li>
          <li>
            <Link to='/npcs/'>Browse NPCs</Link>
          </li>
          <li>
            <Link to='/npcs/mine/2'>My NPCs</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/' element={<GameList />} />
          <Route path='/games/edit/:id' element={<GameEdit />}/>
          <Route path='/games/create/:id' element={<GameCreate />}/>
          <Route path='/games/mine/:id' element={<MyGames />}/>
          <Route path='/pcs/' element={<PCList />}/>
          <Route path='/pcs/edit/:id' element={<PCEdit />}/>
          <Route path='/pcs/mine/:id' element={<MyPCs />}/>
          <Route path='/npcs/' element={<NPCList />}/>
          <Route path='/npcs/mine/:id' element={<MyNPCs />}/>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
