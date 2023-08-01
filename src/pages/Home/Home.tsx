import './Home.css';
import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';
import Card from 'components/Card/Card';

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
      {/* <Sidebar /> */}
      <div className="home-container">
        <div className="home-row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="home-row">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
