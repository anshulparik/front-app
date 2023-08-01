import './Card.css';

import test from '../../../assets/test.jpg';

const Card = () => {
  return (
    <div className="card-main">
      <div className="card-top">
        <img className="card-img" src={test} alt="img" />
        <span className="card-title">Mountain rides</span>
      </div>
      <div className="card-bottom">
        <p className="card-desc">
          A natural elevation of the earth's surface rising more or less
          abruptly to a summit, and attaining an altitude greater than that of a
          hill, usually greater than 2,000 feet (610 meters).
        </p>
        <p className="card-location">Kaza, India</p>
      </div>
    </div>
  );
};

export default Card;
