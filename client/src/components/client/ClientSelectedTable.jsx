import React from 'react'

export default function ClientSelectedTable() {
  return (
    <div className='ourtable'>
      <table className="table my-3">
        <thead>
          <tr>
            <th className='py-3'>Auction No</th>
            <th className='py-3'>Open Time</th>
            <th className='py-3'>Close Time</th>
            <th className='py-3'>Project Name</th>
            <th className='py-3'>Interested</th>
            <th className='py-3'>More Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-3'>1</td>
            <td className='py-3'>Thu Mar 11 2024 16:24:10</td>
            <td className='py-3'>Sun Mar 14 2024 16:24:10</td>
            <td className='py-3'>Winxo corp</td>
            <td className='py-3'><button className='btn btn-success'>Interested</button></td>
            <td className='py-3'>
              <a className="link-underline-dark text-decoration-none cursor">More Info</a>
            </td>
          </tr>

          <tr>
            <td className='py-3'>2</td>
            <td className='py-3'>Fri Mar 12 2024 14:30:45</td>
            <td className='py-3'>Mon Mar 15 2024 14:30:45</td>
            <td className='py-3'>ABC Corp</td>
            <td className='py-3'><button className='btn btn-success'>Interested</button></td>
            <td className='py-3'>
              <a className="link-underline-dark text-decoration-none cursor">More Info</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
