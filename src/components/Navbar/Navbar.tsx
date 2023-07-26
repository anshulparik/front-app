import './Navbar.css';
// import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-logo">Memories</div>
      <div className="nav-search">
        {/* <BiSearch className="nav-icon" /> */}
        <input className="nav-input" type="text" placeholder={'search...'} />
      </div>
    </div>
  );
};

export default Navbar;
