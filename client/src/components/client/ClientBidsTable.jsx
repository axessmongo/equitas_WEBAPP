import React from 'react'

export default function ClientBidsTable() {
  return (
    <>
      <div className='ourtable table-responsive'>
        <table className="table my-3">
          <thead>
            <tr>
              <th className='py-3'>Auction No</th>
              <th className='py-3'>Open Time</th>
              <th className='py-3'>Close Time</th>
              <th className='py-3'>Project Name</th>
              <th className='py-3'>More Info</th>
              <th className='py-3'>Bidding Status</th>
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
              <td className='py-3'>
                <p className='text-success'>Running ..</p>
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
              <td className='py-3'>
                <p className='text-danger'>Ended</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
