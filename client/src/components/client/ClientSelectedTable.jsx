import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmplouyeeOngoingModalTable from '../employee/modal/EmplouyeeOngoingModalTable';
import BiddingModal from './modal/BiddingModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../globalstate/slices/userDataSlice';
import { setLoader } from '../../globalstate/slices/loaderSlice';
import { setToast } from '../../globalstate/slices/ToastSlice';

export default function ClientSelectedTable() {
  const [ongoingShow, setOngoingShow] = useState(false);
  const [biddingShow, setBiddingShow] = useState(false);
  const [ongoingData, setOngoingData] = useState([]);
  const [ongoingSelectData, setOngoingSelectData] = useState(null); // initialize with null
  const userId = useSelector(state => state.userdata.minval?.user_id); // Ensure userdata is not undefined
  const mode = useSelector(state => state.mode);
  const getUserId = useSelector(state => state.userdata.id);
  const getIntrestedProjects = useSelector(state => state.userdata.data?.intestedprojects);
  const biddedProjects = useSelector(state => state.userdata.data?.biddedprojects);
  const dispatch = useDispatch();
  const loaderDispatch = useDispatch();

  const getOngoingData = async () => {
    try {
      loaderDispatch(setLoader(true))
      const res = await axios.get('http://localhost:4000/api/showprojects');
      setOngoingData(res.data.data);
    } catch (err) {
      console.log(err)
    } finally {
      loaderDispatch(setLoader(false))
    }
  }

  const setBookmark = async (projectid, projectname) => {
    console.log(projectid);
    try {
      loaderDispatch(setLoader(true))
      let res = await axios.post(`http://localhost:4000/api/intrestedprojects/${userId}`, { projectid });
      if (res.status === 200) {
        dispatch(setToast({ status: "bookmark-added", message: `${projectname} is added into intrested` }))
      } else if (res.status === 201) {
        dispatch(setToast({ status: "bookmark-removed", message: `${projectname} is removed into intrested` }))
      }
      dispatch(fetchUserData(userId));
    } catch (err) {
      console.log(err);
    } finally {
      loaderDispatch(setLoader(false))
    }
  }



  useEffect(() => {
    getOngoingData();
    console.log(userId);
  }, []);

  return (
    <>
      {getIntrestedProjects?.length > 0 ?
        (
          <div className='ourtable table-responsive'>
            <table className="table my-3">
              <thead>
                <tr>
                  <th className='py-3'>Auction No</th>
                  <th className='py-3'>Open Time</th>
                  <th className='py-3'>Close Time</th>
                  <th className='py-3'>Project Name</th>
                  <th className='py-3'>Interested</th>
                  <th className='py-3'>More Info</th>
                  <th className='py-3'>Interested Projects</th>
                </tr>
              </thead>
              <tbody>
                {ongoingData.map((data, index) =>
                  getIntrestedProjects.includes(data._id) ? (
                    <tr key={index}>
                      <td className='py-3'><p className='_id'>{data._id}</p></td>
                      <td className='py-3'>{data.opentime}</td>
                      <td className='py-3'>{data.closetime}</td>
                      <td className='py-3'>{data.projectname}</td>
                      <td className='py-3'>
                        {biddedProjects && Object.keys(biddedProjects).includes(data._id) ? (
                          <>
                            <span className='me-3'>Bidded</span>
                            {/* <i className="bi bi-pencil-square cursor" onClick={() => { setBiddingShow(true); setOngoingSelectData(data); }}></i> */}
                          </>
                        ) : (
                          <button className='btn btn-success' onClick={() => { setBiddingShow(true); setOngoingSelectData(data); }}>Interested</button>
                        )}
                      </td>
                      <td className='py-3'><a className="link-underline-dark text-decoration-none cursor" onClick={() => { setOngoingShow(true); setOngoingSelectData(data); }}>More Info</a></td>
                      <td className='py-3'><a className={`bi bi-bookmark-fill cursor text-warning`} onClick={() => setBookmark(data._id, data.projectname)}></a></td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        ) :
        (
          <div className='justify-content-center align-items-center d-flex position-absolute top-50 start-50 translate-middle alert alert-warning'>
            <p className='mb-0'>No Intrested Project Is Here</p>
          </div>
        )}

      <EmplouyeeOngoingModalTable selectedData={ongoingSelectData} show={ongoingShow} onHide={() => setOngoingShow(false)} />
      <BiddingModal selectedData={ongoingSelectData} show={biddingShow} onHide={() => setBiddingShow(false)} onClose={() => setBiddingShow(false)} />
    </>

  )
}
