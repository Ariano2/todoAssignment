import { useState } from 'react';
import { login, logout } from '../utils/authSlice';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(password, email);
    if (
      password === import.meta.env.VITE_TEST_PASSWORD &&
      email === import.meta.env.VITE_TEST_EMAIL
    ) {
      // dispatch login
      console.log('Login Successfull');
      dispatch(login());
    } else {
      // dispatch logout
      console.log('Invalid Credentials');
      setShowError(true);
      dispatch(logout());
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  return (
    <>
      <form className="rounded-lg flex flex-col items-center p-10 border-2 lg:w-2/3 mx-auto">
        <h1 className="text-2xl text-center my-4 font-bold">Login</h1>
        <div className="lg:w-[70%]">
          <fieldset className="fieldset my-2">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              required
              value={email}
              className="border-2 text-lg p-2 rounded-md"
              placeholder="sample@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="fieldset my-2">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              required
              value={password}
              className="border-2 p-2 text-lg rounded-md"
              placeholder="Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>
        </div>
        <button
          className="hover:animate-pulse bg-primary my-4 p-4 rounded-lg"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </button>
        {showError && (
          <p className="text-red-700">
            Invalid Credentials try test@gmail.com with 123456
          </p>
        )}
      </form>
    </>
  );
};

export default Auth;
