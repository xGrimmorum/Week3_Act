import './Navbar.css';

function Navbar({ active }) {
  return (
    <div className="navbar">
      <div className={`nav-item ${active === 'Home' ? 'active' : ''}`}>Home</div>
      <div className="nav-item">About Us</div>
      <div className="nav-item">Contact Us</div>
    </div>
  );
}

export default Navbar;
