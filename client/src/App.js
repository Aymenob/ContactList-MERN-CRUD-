
import './App.css';
import Home from './webPages/Home';
import { Route, Routes} from 'react-router-dom';
import Update from './webPages/update';
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path="/Update" element={<Update/>}></Route>
  </Routes>
  );
}

export default App;