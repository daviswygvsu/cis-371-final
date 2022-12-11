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
import NPCEdit from './components/NPCEdit';
import NPCList from './components/NPCList';
import MyNPCs from './components/MyNPCs';
import QuestCreate from './components/QuestCreate';
import QuestEdit from './components/QuestEdit';
import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';
import LocationCreate from './components/LocationCreate';
import LocationEdit from './components/LocationEdit';
import GameView from './components/GameView';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";
import '../styles/Lists.css';

function App() {
  return (<>
    <Router>
      <div>
          <span className='tab'>
            <Link to='/'>Home</Link>
          </span>
          <span className='tab'>
            <Link to='/login'>Log in</Link>
          </span>
          <span className='tab'>
            <Link to='/signup/'>Sign up</Link>
          </span>
          <span className='tab'>
            <Link to='/games/'>Browse Games</Link>
          </span>
          <span className='tab'>
            <Link to='/games/mine/'>My Games</Link>
          </span>
          <span className='tab'>
            <Link to='/pcs/mine/'> My PCs</Link>
          </span>
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
          <Route path='/npcs/edit/:id' element={<NPCEdit />}/>
          <Route path='/items/create/:pcid' element={<ItemCreate />}/>
          <Route path='/items/edit/:id' element={<ItemEdit />}/>
          <Route path='/quests/create/:gid' element={<QuestCreate />}/>
          <Route path='/quests/edit/:id' element={<QuestEdit />}/>
          <Route path='/locations/create/:gid' element={<LocationCreate />}/>
          <Route path='/locations/edit/:id' element={<LocationEdit />}/>
          <Route path='/games/:id' element={<GameView />}/>
        </Routes>
      </div>

    </Router>
  </>);
}

export default App;
