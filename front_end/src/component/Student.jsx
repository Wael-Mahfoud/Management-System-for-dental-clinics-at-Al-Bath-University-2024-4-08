import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from '@/logic/UserContext';
import { useRouter } from 'next/navigation';
export default function Student() {
    const { logout, user } = useUser();
    const router = useRouter();
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
                                <div className="nav-link text-primary text-capitalize">Home</div>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link href="/student/student_records" passHref>
                                <div className="nav-link text-primary text-capitalize">your records</div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/student/operation?type=student" passHref>
                                <div className="nav-link text-primary text-capitalize">patient operations</div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/student/patient_record_list?type=waiting" passHref>
                                <div className="nav-link text-primary text-capitalize">waited patient records</div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/student/patient_record_list?type=all" passHref>
                                <div className="nav-link text-primary text-capitalize">All patient records</div>
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link href={`/user/profile?id=${user ? user.id : 0}`} >
                                <div className="nav-link text-primary text-capitalize">Profile</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" passHref>
                                <div className="nav-link text-primary text-capitalize">About us</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/home"  >
                                <div className="nav-link text-primary text-capitalize" onClick={() => {
                                    logout();
                                }}>Logout</div>
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
