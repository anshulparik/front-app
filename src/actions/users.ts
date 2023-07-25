import { toogleLoading } from 'reducers/tools';
import { AppDispatch, AppThunk } from 'renderer/store';
import { storeValue } from 'utils/helpers';
import { userApis } from 'utils/http-common';
import { LoginFormData, RegisterFormData, STORAGEKEYS } from 'utils/types';

export const registerUser =
  (
    userDetails: Omit<RegisterFormData, 'confirmPassword'>,
    navigate: any
  ): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(toogleLoading(true));
      await userApis.addUser(userDetails);
      navigate('/login');
    } catch (error) {
      console.log('==== registerUser err', error);
    } finally {
      dispatch(toogleLoading(false));
    }
  };

export const loginUser =
  (userDetails: LoginFormData, navigate: any): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(toogleLoading(true));
      const res = await userApis.login(userDetails);
      const user = res?.data;
      storeValue(STORAGEKEYS.USER, JSON.stringify(user));
      navigate('/home');
    } catch (error) {
      console.log('==== loginUser err', error);
    } finally {
      dispatch(toogleLoading(false));
    }
  };
