import React from 'react';
import '../Styles/Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="left-navbar">Left Navbar</div>
            <div className="main">
                <div className='dashboard-title'>
                    <div className='dashboard-title-top'>
                        <p> MediLink </p>
                        <p>Today</p>
                    </div>
                    <div className='dashboard-title-bottom'>
                        <p> Device Connected </p>
                        
                    </div>
                </div>
                <div className="greeting">
                    <h2>Hello, User!</h2>
                    <p>You have an appointment due 4 hours. </p>
                    <button>See History</button>
                </div>
                <div className="health-stats">
                    <div className='heartrate'>
                        <h3>123 BPM</h3>
                        <h2>Heart Rate</h2>
                        <p>Your heart rate is higher than usual.</p>
                    </div>
                    <div className='steps'>
                        <h3>2031 Steps</h3>
                        <h2>Steps</h2>
                        <p>Need 7969 steps more to complete your daily goal of 10000 steps.</p>
                    </div>
                    <div className='bp'>
                        <h3>98 mmHg</h3>
                        <h2>Blood Pressure</h2>
                        <p>Your Blood Pressure is normal.</p>
                    </div>
                </div>
                <div className="row3-col1">
                    <h3>4.9 hrs</h3>
                    <h2>Sleep condition</h2>
                    <p>Take a break from work and have rest.</p>
                </div>
                <div className="row4-col1">
                    <h2>Overall Health</h2>
                    <h3>69%</h3>
                    <p>2% better from last week</p>
                </div>
                <div className="row3-4-col2-3">Take data from api and create graph</div>
            </div>
            <div className="right-side">
                <div className='right-profile'>
                    <img src='' alt='Profile'/>
                    <h2>Chandan</h2>
                    <h4>23 Yearss</h4>
                    <div className='right-profile-stats'>

                    </div>
                </div>
                <div className='right-calendar'></div>
            </div>
        </div>
    );
}
