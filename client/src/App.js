import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';

import SignUpPanel from './components/SignUpPanel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignUpPanel/>
    </div>
  );
}

export default App;
