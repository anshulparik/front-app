import './Home.css';
import Sidebar from 'components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';
import Card from 'components/Card/Card';

import test from '../../../assets/test.jpg';
import test2 from '../../../assets/test2.jpg';
import test3 from '../../../assets/test3.jpg';
import test4 from '../../../assets/test4.jpg';
import test5 from '../../../assets/test5.jpg';

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
      {/* <Sidebar /> */}
      <div className="home-container">
        <div className="home-row">
          <Card
            title="Between the valley"
            img={test}
            description=" A natural elevation of the earth's surface rising more or less
          abruptly to a summit, and attaining an altitude greater than that of a
          hill, usually greater than 2,000 feet (610 meters)."
            location="Munnar"
            country="India"
          />
          <Card
            title="Living the dream!"
            img={test2}
            description="A natural elevation of the earth's surface rising more or less
          abruptly to a summit."
            location="Ben Nevis"
            country="Scotland"
          />
          <Card
            title="Along the sky into the rails"
            img={test3}
            description=" A natural elevation of the earth's surface rising more or less
          abruptly to a summit, and attaining an altitude greater than that of a
          hill, usually greater than 2,000 feet (610 meters)."
            location="thing vellir national park"
            country="Democratic Republic of the Congo"
          />
        </div>
        <div className="home-row">
          <Card
            title="Between the valley"
            img={test5}
            description=" A natural elevation of the earth's surface rising more or less
          abruptly to a summit, and attaining an altitude greater than that of a
          hill, usually greater than 2,000 feet (610 meters)."
            location="Kinshasa"
            country="Democratic Republic of the Congo"
          />
          <Card
            title="Into the woods"
            img={test4}
            description=" A natural elevation of the earth's surface rising more or less
          abruptly to a summit, and attaining an altitude greater than that of a
          hill, usually greater than 2,000 feet (610 meters)."
            location="Sarajevo"
            country="Bosnia and Herzegovina"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
