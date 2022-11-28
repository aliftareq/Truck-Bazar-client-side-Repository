import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    let activeStyle = {
        backgroundColor: "green",
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <p className='text-center text-4xl mt-10'>welcome to dashboard, click the sidebar button</p>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 lg:bg-transparent text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* {
                            isBuyer && <li><NavLink to='/dashboard'>My orders</NavLink></li>
                        } */}
                        {
                            isSeller &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/myproducts'
                                        end
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        My Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-products'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        Add A product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/my-buyers'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        My buyers
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/all-sellers' end
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        All Sellers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/all-buyers'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        All Buyers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/all-admin'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        All Admins
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reported-items'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >
                                        Reported Items
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;