import './Home.css';
import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="home-main">
      {/* <Navbar /> */}
      <Sidebar />
    </div>
  );
};

export default Home;
