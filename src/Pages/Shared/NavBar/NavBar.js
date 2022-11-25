import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import logo from '../../../Assets/images/tb-logo.jpg'

const NavBar = () => {
    //context values
    const { user, logOut } = useContext(AuthContext)

    //navigation
    const navigate = useNavigate()
    //handlers 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.info('successfully logged out')
                navigate('/login')
            })
            .catch(err => {
                console.error(err)
                toast.error('something went wrong')
            })
    }
    return (
        <section>
            <div className="navbar bg-gray-900 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Categories
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-indigo-50 rounded">
                                    <li className='text-black'><Link>pickup/van </Link></li>
                                    <li className='text-black'><Link>trucks </Link></li>
                                    <li className='text-black'><Link>trailor </Link></li>
                                </ul>
                            </li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user && user?.uid
                                    ?
                                    <>
                                        <li><Link>DashBoard</Link></li>
                                        <li tabIndex={1}>
                                            <Link className="justify-between">
                                                <div className="w-10 rounded-full">
                                                    <img className='rounded-2xl' title={user?.displayName} src={user?.photoURL} alt='img-1' />
                                                </div>
                                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </Link>
                                            <ul className="p-2 bg-indigo-50 rounded">
                                                <li className='text-black'>
                                                    <Link className="justify-between">
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li className='text-black'><Link>My Products</Link></li>
                                            </ul>
                                        </li>
                                    </>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                            }
                            {
                                user && user?.uid
                                    ?
                                    <li onClick={handleLogOut}>
                                        <p className="btn bg-indigo-500 hover:bg-indigo-700 border-none">Logout</p>

                                    </li>
                                    :
                                    <Link to='/register'>
                                        <li>
                                            <p className="btn bg-indigo-500 hover:bg-indigo-700 border-none">Register</p>
                                        </li>
                                    </Link>

                            }


                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <Link to='/' className="text-white text-xl font-bold">
                            <img className='w-16 rounded-md' src={logo} alt="" />
                        </Link>
                        <Link to='/' >
                            <p className="text-white text-sm lg:text-xl font-bold ml-3">Truck Bazar</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex text-white">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-indigo-50 rounded">
                                <li className='text-black'><Link>Pick-Up/Van</Link></li>
                                <li className='text-black'><Link>Trucks</Link></li>
                                <li className='text-black'><Link>Trailor</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user && user?.uid
                                ? <li><Link>Dashboard</Link></li>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                    {
                        user && user?.uid
                            ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img title={user?.displayName} src={user?.photoURL} alt='img-1' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link>Profile</Link>
                                    </li>
                                    <li><Link>My Products</Link></li>
                                </ul>
                            </div>
                            : <></>

                    }
                    {
                        user && user?.uid
                            ?
                            <div onClick={handleLogOut} className="btn">
                                <p>Logout</p>
                            </div>
                            :
                            <Link to='/register'>
                                <div className="btn bg-indigo-500 hover:bg-indigo-700">Register</div>
                            </Link>
                    }


                </div>
            </div>
        </section>
    );
};

export default NavBar;