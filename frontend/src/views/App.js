import GameList from './components/GameList';
import GameEdit from './components/GameEdit';
import GameCreate from './components/GameCreate';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/games/'>Games</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path='/games/' element={<GameList />} />
          <Route path='/games/edit/:id' element={<GameEdit />}/>
          <Route path='/games/create' element={<GameCreate />}/>
        </Routes>
        
      </div> 
    </Router>
  );
}

export default App;
