import './App.css';
import Header from './assets/Header.jsx';
import Navbar from './assets/Navbar.jsx';
import Content from './assets/Content.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar active="Home" />
      <Content />
    </div>
  );
}

export default App;
