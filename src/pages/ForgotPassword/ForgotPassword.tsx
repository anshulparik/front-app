import LandingLayout from 'layouts/landing';
import './ForgotPassword.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordForm, LoginFormData } from 'utils/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginUser } from 'actions/users';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const ForgotPassword = () => {
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();

  const { loading } = useSelector((state: any) => state.tools);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();

  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (
    data: ForgotPasswordForm
  ) => {};

  return (
    <LandingLayout>
      <div className="main">
        <div className="section">
          <h1 className="sub-heading">Forgot Password</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <input
                className="input"
                type="text"
                id="detail"
                placeholder="username/email"
                {...register('detail', {
                  required: 'Username/Email is required!',
                })}
              />
              {errors && errors.detail && (
                <span className="err-span">{errors?.detail?.message}</span>
              )}
            </div>
            <Button type="submit" theme="dark" text="Send" />
          </form>
        </div>
      </div>
      {loading && <Loader />}
    </LandingLayout>
  );
};

export default ForgotPassword;
