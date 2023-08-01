import './Card.css';
import { FiEdit } from 'react-icons/fi';

interface CardProps {
  title: string;
  img: string;
  location: string;
  country: string;
  description: string;
}

const Card = ({ title, img, location, country, description }: CardProps) => {
  return (
    <div className="card-main">
      <div className="card-top">
        <img className="card-img" src={img} alt="img" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-bottom">
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <FiEdit className="card-icon" />
          <div className="card-location">
            <p className="location">{location}</p>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
