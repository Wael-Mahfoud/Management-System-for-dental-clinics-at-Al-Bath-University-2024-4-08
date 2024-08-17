'use client';

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // تأكد من إضافة Bootstrap
//import 'font-awesome/css/font-awesome.min.css'; // تأكد من إضافة Font Awesome
import { useSearchParams } from 'next/navigation';
import BackMethods from '@/logic/BackMethods';
import { useRouter } from 'next/navigation';
import StudentRecords from '@/app/student/student_records/page';
import { useUser } from '@/logic/UserContext';
const ProfilePage = () => {
    const router = useRouter();

    const [user1, setUser] = useState(null);
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // الحصول على id من الـ URL
    const { backEnd_request, user_image_folder } = BackMethods();
    const { user } = useUser();

    const getUserInfo = async () => {
        if (id) {
            try {
                const response = await backEnd_request.post('/get_user_information', { user_id: id });
                setUser(response.data.data);
            } catch (error) {
                console.error('Error fetching user1 data:', error);
            }
        }
    };

    useEffect(() => {
        getUserInfo();
    }, [id]);

    if (!user1) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="bg-white px-5 my-5">
            <div className=' my-3 py-3'>
                <h1 className='text-secondary b text-capitalize py-3 text-center'> user1 profile page</h1>

                <h4 className='text-primary text-capitalize text-center'> {user1.name} profile card</h4>

            </div>
            <hr />
            <div className="row mt-3 bg-white  shadow pt-5  pb-3 bordered d-flex justify-content-center">
                <div className="col-md-4 text-center ">
                    <div className="profile-header  p-4 rounded">
                        <img
                            src={user_image_folder + user1.image || '/default-profile.png'} // صورة افتراضية إذا لم تكن الصورة موجودة
                            alt="Profile Picture"
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <h2 className="mb-2 text-capitalize">{user1.name}</h2>
                        <p className="text-muted">{user1.type.charAt(0).toUpperCase() + user1.type.slice(1)}</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Profile Details</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li className='my-2'>
                                    <i className="fa fa-envelope text-primary"></i> <strong>Email:</strong> {user1.email}
                                </li>
                                <li className='my-2'>
                                    <i className="fa fa-phone text-success"></i> <strong>Phone:</strong> {user1.phone}
                                </li>
                                <li className='my-2'>
                                    <i className="fa fa-map-marker text-info"></i> <strong>Address:</strong> {user1.address}
                                </li>
                                <li className='my-2'>
                                    <i className="fa fa-venus-mars text-warning"></i> <strong>Gender:</strong> {user1.gender}
                                </li>
                                <li className='my-2'>
                                    <i className="fa fa-calendar text-danger"></i> <strong>Age:</strong> {user1.age}
                                </li>
                                <li className='my-2'>
                                    <i className="fa fa-info-circle text-secondary"></i> <strong>Global Information:</strong> {user1.global_information}
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                {user && user1.id == user.id ? <div className='row pt-3'>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-block btn-primary px-5 shadow rounded ' onClick={() => router.push('/user/edit_profile')} > Edit  <i className='fa fa-edit'></i> </button>
                    </div></div> : ""}
            </div>

            {user1.type == "student" ? <StudentRecords /> : ""}
        </div>
    );
};

export default ProfilePage;
