import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, createUser } = useContext(AuthContext)
    // console.log(user, createUser)

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        setSuccess(' ');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, password, photo)

        if (password.length < 6) {

            setError('Password should contain 6 character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                setError('')
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photo
                }).then((res) => {
                    console.log(res.user.photoURL, res.user)
                    alert('user created and updated')
                }).catch((error) => {
                    console.error(error.message)
                    setError(error.message)
                    alert(error.message)
                });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (

        <div className="hero min-h-screen bg-base-200 mt-8">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className='text-4xl font-extrabold'>SignUp Here</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                        </div>
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
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-orange-600">Already have an account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-orange-500 hover:bg-orange-700">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;