import React from 'react'

export default function EmployeeOngoingTable() {
    return (
        <>
            <div className='ourtable'>
                <table className="table my-3">
                    <thead>
                        <tr>
                            <th className='py-3'>Auction No</th>
                            <th className='py-3'>Open Time</th>
                            <th className='py-3'>Close Time</th>
                            <th className='py-3'>Project Name</th>
                            <th className='py-3'>More Info</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>1</td>
                            <td className='py-3'>Thu Mar 11 2024 16:24:10</td>
                            <td className='py-3'>Sun Mar 14 2024 16:24:10</td>
                            <td className='py-3'>Winxo corp</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>

                        <tr>
                            <td className='py-3'>2</td>
                            <td className='py-3'>Fri Mar 12 2024 14:30:45</td>
                            <td className='py-3'>Mon Mar 15 2024 14:30:45</td>
                            <td className='py-3'>ABC Corp</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>
                        <tr>
                            <td className='py-3'>3</td>
                            <td className='py-3'>Sat Mar 13 2024 10:15:20</td>
                            <td className='py-3'>Tue Mar 16 2024 10:15:20</td>
                            <td className='py-3'>XYZ Corp</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>

                        <tr>
                            <td className='py-3'>4</td>
                            <td className='py-3'>Sun Mar 14 2024 12:45:30</td>
                            <td className='py-3'>Wed Mar 17 2024 12:45:30</td>
                            <td className='py-3'>Tech Innovations Inc.</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>

                        <tr>
                            <td className='py-3'>5</td>
                            <td className='py-3'>Mon Mar 15 2024 09:00:00</td>
                            <td className='py-3'>Thu Mar 18 2024 09:00:00</td>
                            <td className='py-3'>Global Solutions Ltd.</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>

                        <tr>
                            <td className='py-3'>6</td>
                            <td className='py-3'>Tue Mar 16 2024 18:20:15</td>
                            <td className='py-3'>Fri Mar 19 2024 18:20:15</td>
                            <td className='py-3'>InnovateX Corp</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>

                        <tr>
                            <td className='py-3'>7</td>
                            <td className='py-3'>Wed Mar 17 2024 14:55:50</td>
                            <td className='py-3'>Sat Mar 20 2024 14:55:50</td>
                            <td className='py-3'>TechSolutions LLC</td>
                            
                            <td className='py-3'>
                                <a className="link-underline-dark text-decoration-none cursor">More Info</a>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
