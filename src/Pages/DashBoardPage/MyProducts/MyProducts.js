import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    //context values
    const { user } = useContext(AuthContext)

    //use of query 
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('user-token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    return (
        <section className='px-10'>
            <div>
                <h1 className='text-3xl'>My Products</h1>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Name</th>
                            <th>Sale Status</th>
                            <th>Price</th>
                            <th>Action-1</th>
                            <th>Action-2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{booking.Patientname}</td>
                                    <td>{booking.Treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-green-400'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default MyProducts;