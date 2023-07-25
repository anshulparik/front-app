import './index.css';

import Button from 'components/Button/Button';
import '../../renderer/App.css';
import { useLocation, useNavigate } from 'react-router-dom';

const LandingLayout = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="landing-main">
      <div className="landing-btn">
        {location.pathname === '/login' ? (
          <Button
            type="button"
            theme="light"
            text="Register"
            onClick={() => {
              navigate('/');
            }}
          />
        ) : (
          <Button
            type="button"
            theme="light"
            text="Login"
            onClick={() => {
              navigate('/login');
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default LandingLayout;
