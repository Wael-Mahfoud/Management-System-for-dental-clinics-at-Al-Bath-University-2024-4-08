// pages/home.js
import AboutUs from '../about/page';
import './styles.css';
import React from 'react';

const Home = () => {
    return (
        <div className="bg-light">
            {/* Hero Section */}
            <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(/2.jfif)', height: '500px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className="display-4 fw-bold shadow-lg p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}>Welcome to Dental Student Platform</h1>
            </div>

            {/* Team Section */}
            <section className="my-5 container">
                <h2 className="text-center mb-4 text-primary">Meet Our Team</h2>
                <hr className="w-25 mx-auto" />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src="" className="card-img-top" alt="Team Member 1" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Sarah Ahmed</h5>
                                <p className="card-text">Lead Dentist and Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src="" className="card-img-top" alt="Team Member 2" />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src="" className="card-img-top" alt="Team Member 3" />
                            <div className="card-body">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="container my-5 py-5">
                <h1 className="text-center mb-4 text-dark">Our Services</h1>
                <hr className="w-25 mx-auto" />
                <div className="row pt-3">
                    <div className="col-md-4">
                        <div className="card mb-4 bg-primary text-white shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Patient Management</h5>
                                <hr />
                                <p className="card-text">
                                    Efficiently manage patient data and treatment plans through our secure platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 bg-success text-white shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Medical Operations Log</h5>
                                <hr />
                                <p className="card-text">
                                    Record and track all your medical procedures in an organized and user-friendly manner, helping you efficiently manage patient cases.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 bg-warning text-white shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Supervised Training</h5>
                                <hr />
                                <p className="card-text">
                                    Helps students manage medical procedures, track their outcomes in real-time, and receive evaluations from supervising doctors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="my-5 container">
                <AboutUs />
            </section>
        </div>
    );
};

export default Home;
