import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        
        <div className="navbar bg-slate-800 " style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bg-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2 text-white">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/'>Home</NavLink ></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/blogs'>Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/login'>Login</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/register'>SignUp</NavLink></li>
                    </ul>
                </div>
                <Link to='' className="normal-case text-2xl text-red-600">FlavorLab</Link>
            </div>

            <div className="navbar-end">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2 text-white">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/'>Home</NavLink ></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/blogs'>Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/login'>Login</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                        } to='/register'>SignUp</NavLink></li>
                    </ul>
                    {
                        user ? <>
                            {/* <span>{user.email}</span> */}
                            <button onClick={handleLogOut} className="btn btn-error">Sign Out</button>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} title={user.displayName} />
                                </div>
                            </label>
                        </> : <span></span>
                    }
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;