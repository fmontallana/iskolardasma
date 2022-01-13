import React from 'react'
import Header from '../../Components/Header'
import './Profile.css'

function Profile() {
    return (
        <>
        <Header />
            <h3 style={{
                // margin: "20px 0",
                textAlign:"center"
            }}
            >Profile</h3>
            <div className='profile transactionsPage'>
                <div className='profileStatus'>
                    <p>4TH YEAR STUDENT</p>
                    <p>ACTIVE</p>
                </div>
                <div className='profileName'>
                    <h4>Scholar's Name</h4>
                    <h1>Rommel Cazeñas</h1>
                </div>
                <div className='profileAccountNumber'>
                    <h4>Account Number</h4>
                    <h2>2018-1234</h2>
                </div>
                <h3>Scholar Information</h3>
                <div className='basicDetails'>
                    <label>Address:</label>
                    <p>317 Sabang Dasmariñas City, Cavite</p>
                    <label>Birthday:</label>
                    <p>14 February, 1999</p>
                    <label>Course:</label>
                    <p>BS Information Technology</p>
                    <label>School:</label>
                    <p>Cavite State University - Silang</p>
                    <hr />
                    <label>Mobile Number:</label>
                    <p>09157989393</p>
                    <hr />
                    <label>E-mail:</label>
                    <p>rommel.cazenas.dit@gmail.com</p>
                </div>
                <button>Edit Details</button>
            </div>
        </>
    )
}

export default Profile
