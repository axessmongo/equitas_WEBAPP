import React from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import axios from axios

function checkverify() {
    useEffect(()=>{
        const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:4000/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
    },[parms])
  return (
    <div>
        <Fragment>
			{validUrl ? (
				<div className="">
					<img src={success} alt="success_img" className={styles.success_img} />
					<h1>Email verified successfully</h1>
					<Link to="/clientdashboard">
						<button className="btn btn-success">Dashboard</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
    </div>
  )
}

export default checkverify