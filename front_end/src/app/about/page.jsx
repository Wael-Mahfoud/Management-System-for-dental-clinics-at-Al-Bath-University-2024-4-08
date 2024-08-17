// pages/about.js
import './styles.css';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="container my-5 p-5 bg-light rounded shadow">
            <div className="row text-center mb-4">
                <div className="col">
                    <h1 className="display-4 text-primary">About Us</h1>
                    <hr className="mx-auto" style={{ width: '10%', borderTop: '2px solid #007bff' }} />
                    <p className="lead p-3">
                        Welcome to our platform for dental students. We aim to provide a great
                        experience that connects students, patients, and supervising doctors.
                    </p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card bg-info text-light mb-4 h-100">
                        <div className="card-body">
                            <h5 className="card-title">Our Mission</h5>
                            <hr className='text-white bg-white' />
                            <p className="card-text">
                                Our website aims to facilitate communication between patients and dental students, enabling patients to receive appropriate treatment and allowing students to gain practical experience. The platform also securely and efficiently stores users' data and their medical conditions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-secondary text-light mb-4 h-100">
                        <div className="card-body">
                            <h5 className="card-title">Our Team</h5>
                            <hr className='text-white bg-white' />
                            <p className="card-text">
                                Our team is made up of Computer Engineering students from Al-Baath University. We developed this website to assist dental students by automating their work processes and providing a digital platform for tracking and managing their tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <div className="card bg-light border-info shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Contact Us</h5>
                            <hr />
                            <p className="card-text">
                                If you have any questions, feel free to reach out to us at <a href="mailto:contact@DantelTeamSyr@gmail.com" className="text-info">Dantel.team.syr@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
