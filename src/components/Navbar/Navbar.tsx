import './Navbar.css';
import { IoResize } from 'react-icons/io5';
import { GoDash } from 'react-icons/go';
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-logo">Memories</div>
      <div className="nav-search">
        <input className="nav-input" type="text" placeholder={'search...'} />
      </div>
      <div className="nav-options">
        <GoDash className='nav-icon minimize'/>
        <IoResize className='nav-icon resize'/>
        <IoClose className='nav-icon close'/>
      </div>
    </div>
  );
};

export default Navbar;
