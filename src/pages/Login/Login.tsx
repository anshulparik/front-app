import './Login.css';
import LandingLayout from 'layouts/landing';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../actions/users';
import { LoginFormData } from 'utils/types';

const Login = () => {
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();

  const { loading } = useSelector((state: any) => state.tools);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (
    data: LoginFormData
  ) => {
    dispatch(loginUser(data, navigate));
  };

  return (
    <LandingLayout>
      <div className="main">
        <div className="section">
          <h1 className="sub-heading">Login</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                className="input"
                type="text"
                id="username"
                placeholder="username"
                {...register('username', { required: 'Username is required!' })}
              />
              {errors && errors.username && (
                <span className="err-span">{errors?.username?.message}</span>
              )}
            </div>
            <div className="input-container">
              <input
                className="input"
                type="password"
                id="password"
                placeholder="password"
                {...register('password', { required: 'Password is required!' })}
              />
              {errors && errors.password && (
                <span className="err-span">{errors?.password?.message}</span>
              )}
            </div>
            <Button type="submit" theme="dark" text="Login" />
          </form>
          <p
            className="section-para"
            onClick={() => {
              navigate('/forgotPwd');
            }}
          >
            Forgot password?
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </LandingLayout>
  );
};

export default Login;
