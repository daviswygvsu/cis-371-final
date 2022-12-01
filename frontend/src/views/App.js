import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/games/'>Games</Link>
          </li>
            
          <li>
            <Link to='/pcs/'>PCs</Link>
          </li>

          <li>
            <Link to='/npcs/'>NPCs</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path='/games/' element={<GameList />} />
          <Route path='/games/edit/:id' element={<GameEdit/>}/>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
