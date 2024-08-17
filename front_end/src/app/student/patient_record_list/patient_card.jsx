import { useUser } from '@/logic/UserContext';
import BackMethods from '@/logic/BackMethods';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; // Ensure you have react-bootstrap installed
import Button from 'react-bootstrap/Button';

export default function PatientCard(item, index, setInfoMsg, setErrorMsg, getPatientRecords, doctors) {
    const { user, logout } = useUser();
    const { backEnd_request, check_patient, user_image_folder } = BackMethods();
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState('');

    const handleConfirmClick = () => {
        setShowModal(true);
    };

    const handleDoctorSelect = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const handleConfirmSubmit = () => {
        if (selectedDoctor) {
            setErrorMsg("");
            setInfoMsg("");
            if (user) {
                backEnd_request.post('/confirm_patient_records', {
                    id: item.id,
                    student_id: user.id,
                    doctor_id: selectedDoctor, // Pass selected doctor ID
                }).then((res) => {
                    if (res.data.success) {
                        setInfoMsg(res.data.data);
                        getPatientRecords();
                        setShowModal(false);
                    } else {
                        setErrorMsg(res.data.data);
                    }
                });
            }
        } else {
            setErrorMsg("Please select a supervising doctor.");
        }
    };

    return (
        <div className='col-lg-3 col-md-5 col-sm-10 card m-2 shadow' id="d" key={index}>
            <div className=''>
                <div className="col-12 text-center">
                    <div className="profile-header p-4 rounded">
                        <a href={user_image_folder + item.patient.image}>
                            <img
                                src={user_image_folder + item.patient.image || '/default-profile.png'}
                                alt="Profile Picture"
                                className="img-fluid rounded-circle mb-3"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        </a>
                        <br />
                    </div>
                </div>

                <div className='row d-flex justify-content-center text-center'>
                    <span className='btn'>
                        <h2 className="mb-2 text-capitalize text-primary text-center" onClick={() => router.push(`/user/profile?id=${item.patient.id}`)}>
                            {item.patient.name}
                        </h2>
                    </span>
                </div>
            </div>
            <hr />
            <div className='card-body'>
                <div>
                    <h5>
                        <i className='fa fa-calendar text-primary'></i> :{item.open_date}
                    </h5>
                    <h5>
                        <i className='fa fa-edit text-success'></i> :{item.state}
                    </h5>
                    <h5>
                        <i className='fa fa-info-circle'></i> :{item.global_information}
                    </h5>
                    <hr />
                </div>
                <div className='text-center'>
                    {item.state === "waiting" ?
                        user.type === "student" ?
                            <button
                                className='btn btn-success btn-block text-light text-capitalize'
                                onClick={handleConfirmClick}
                            >
                                confirm <i className='fa fa-check'></i>
                            </button>
                            :
                            <button
                                className='btn btn-success btn-block text-light text-capitalize disabled'
                            >
                                waiting for confirm <i className='fa fa-times-circle'></i>
                            </button>
                        :
                        <button
                            className='btn btn-info btn-block text-light text-capitalize'
                            onClick={() => router.push('/student/operation?record_id=' + item.id)}
                        >
                            treatment <i className='fa fa-list'></i>
                        </button>}
                </div>
            </div>

            {/* Modal for selecting doctor */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Supervising Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select
                        className="form-control"
                        value={selectedDoctor}
                        onChange={handleDoctorSelect}
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmSubmit}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
