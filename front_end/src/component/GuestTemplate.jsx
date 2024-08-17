import Link from 'next/link';
import '../styles/bootstrap.min.css';

export default function GuestTemplate() {
    return (
        <div className='bg-dark package-item'>
            <nav className="navbar container">
                <div className="container-fluid fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                    <h3 className='text-light'>
                        <div className="nav-brand nav-link">
                            <span style={{ color: "#86B817" }}>Online Stores</span>
                        </div>
                    </h3>

                    <button className="navbar-toggler mr-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="nav-link"><Link href="/">Home</Link></div>
                        <div className="nav-link"><Link href="/login">Login</Link></div>
                        <div className="nav-link"><Link href="/register">Register</Link></div>
                    </div>
                </div>
            </nav>

            <div className='bg-dark'>
                {/* محتوى إضافي */}
            </div>
        </div>
    );
}
