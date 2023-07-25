import './Register.css';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LandingLayout from 'layouts/landing';
import { registerUser } from 'actions/users';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { RegisterFormData } from 'utils/types';

const Register = () => {
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();
  const { loading } = useSelector((state: any) => state.tools);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData
  ) => {
    const { confirmPassword, password, ...userDetails } = data;
    if (password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'onChange',
        message: 'Password and Confirm Password should be same!',
      });
      return;
    }
    dispatch(registerUser({ ...userDetails, password }, navigate));
  };

  return (
    <LandingLayout>
      <div className="main">
        <div className="section">
          <h1 className="sub-heading">Register</h1>
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
                type="text"
                id="firstName"
                placeholder="first name"
                {...register('firstName', {
                  required: 'First Name is required!',
                })}
              />
              {errors && errors.firstName && (
                <span className="err-span">{errors?.firstName?.message}</span>
              )}
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                id="lastName"
                placeholder="last name"
                {...register('lastName', {
                  required: 'Last Name is required!',
                })}
              />
              {errors && errors.lastName && (
                <span className="err-span">{errors?.lastName?.message}</span>
              )}
            </div>
            <div className="input-container">
              <input
                className="input"
                type="email"
                id="email"
                placeholder="e-mail"
                {...register('email', { required: 'E-mail is required!' })}
              />
              {errors && errors.email && (
                <span className="err-span">{errors?.email?.message}</span>
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
            <div className="input-container">
              <input
                className="input"
                type="password"
                id="confirmPassword"
                placeholder="confirm password"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required!',
                })}
              />
              {errors && errors.confirmPassword && (
                <span className="err-span">
                  {errors?.confirmPassword?.message}
                </span>
              )}
            </div>
            <Button type="submit" theme="dark" text="Register" />
          </form>
        </div>
      </div>
      {loading && <Loader />}
    </LandingLayout>
  );
};

export default Register;
