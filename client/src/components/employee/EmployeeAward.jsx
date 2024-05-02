import React from 'react'

export default function EmployeeAward() {
  return (
    <>
      <div className='ourtable table-responsive'>
        <table className="table my-3">
          <thead>
            <tr>
              <th className='py-3'>Auction No</th>
              <th className='py-3'>Award Date</th>
              <th className='py-3'>Awarded Person</th>
              <th className='py-3'>Company Name</th>
              <th className='py-3'>Project Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-3'>1</td>
              <td className='py-3'>2024-03-27</td>
              <td className='py-3'>John Doe</td>
              <td className='py-3'>ABC Corp</td>
              <td className='py-3'>Project Alpha</td>
            </tr>
            <tr>
              <td className='py-3'>2</td>
              <td className='py-3'>2024-03-28</td>
              <td className='py-3'>Jane Smith</td>
              <td className='py-3'>XYZ Inc</td>
              <td className='py-3'>Project Beta</td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}
