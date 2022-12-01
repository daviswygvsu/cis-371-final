import GameList from './components/GameList';
import GameForm from './components/GameForm';
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
          <Route path='/games/edit/:id' element={<GameForm/>}/>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
