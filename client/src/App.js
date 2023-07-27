import './App.css';
import Navbar from './components/Navbar.jsx';
import SignUpPanel from './components/SignUpPanel.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
      <SignUpPanel/>
      </div>
    </div>
  );
}

export default App;
