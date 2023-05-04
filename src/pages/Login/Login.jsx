import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

  const [error, setError] = useState('')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {

    event.preventDefault();
    setError('');

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    if (password.length < 6) {
      setError('Password should contain 6 character');
      return;
    }

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message)
      })
  }


  return (

    <div className="hero min-h-screen bg-base-200 mt-8">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-4xl font-extrabold'>LOGIN</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-orange-500 hover:bg-orange-700 mb-2">Login</button>

            </div>

          </form>
          <p className='text-red-600 text-center'>{error && error}</p>
          <div className='flex flex-col mx-6'>
            <h3 className='text-center text-orange-700 font-semibold mb-2'>-------OR------</h3>
            <button onClick={handleGoogleLogin} className="btn btn-primary bg-orange-500 hover:bg-orange-700 mb-2"><FaGoogle />Login with Google</button>
            <button onClick={handleGithubLogin} className="btn btn-primary bg-orange-500 hover:bg-orange-700"><FaGithub />Login with GitHub</button>
          </div>
          <Link to='/register' ><button className="no-underline btn btn-link text-orange-600 ms-2">New here?Please sign up here</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;