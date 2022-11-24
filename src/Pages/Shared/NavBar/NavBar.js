import React from 'react';

const NavBar = () => {
    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Categories
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>pickup/van </a></li>
                                    <li><a>trucks </a></li>
                                    <li><a>trailor </a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                            <li><a>DashBoard</a></li>
                            <li><a>Login</a></li>
                            <li tabIndex={1}>
                                <a className="justify-between">
                                    <div className="w-10 rounded-full">
                                        <img className='rounded-lg' src="https://placeimg.com/80/80/people" />
                                    </div>
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </li>
                            <li tabIndex={2}>
                                <a className="btn">Register</a>
                                <ul className="p-2">
                                    <li><a>Join as a Seller</a></li>
                                    <li><a>Join as a Buyer</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Pick-Up/Van</a></li>
                                <li><a>Trucks</a></li>
                                <li><a>Trailor</a></li>
                            </ul>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>Dashboard</a></li>
                        <li><a>Login</a></li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn ">
                            <a className="">Register</a>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Join as a buyer</a></li>
                            <li><a>Join as a seller</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;