import './Navbar.css';
import { IoResize } from 'react-icons/io5';
import { GoDash } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { BsFillBookmarkStarFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-logo">
        <BsFillBookmarkStarFill className="nav-logo-icon" />
        <p className="nav-logo-text">Memories</p>
      </div>
      <div className="nav-search">
        <input className="nav-input" type="text" placeholder={'search...'} />
      </div>
      <div className="nav-options">
        <GoDash className="nav-icon minimize" />
        <IoResize className="nav-icon resize" />
        <IoClose className="nav-icon close" />
      </div>
    </div>
  );
};

export default Navbar;
