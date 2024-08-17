import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Guest() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top px-5" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/logo1.jpg" alt="Logo" style={{ width: '80px', height: '80px', marginRight: '10px' }} />
                    Dental Clinic
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/home" passHref>
                                <div className="nav-link text-primary">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/login" passHref>
                                <div className="nav-link text-primary">Login</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/register" passHref>
                                <div className="nav-link text-primary">Register</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
