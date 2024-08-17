// pages/operations/[id].js
'use client';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/logic/UserContext';
import BackMethods from '@/logic/BackMethods';
import { useRouter } from 'next/navigation';

export default function OperationDetails() {
    const { backEnd_request, check_patient, operation_image_folder } = BackMethods();
    const searchParams = useSearchParams();
    const operation_id = searchParams.get('operation_id');
    const { user } = useUser();
    const router = useRouter();
    const [operation, setOperation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // State to manage the visibility of the floating menu
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (operation_id) {
            const fetchOperation = async () => {
                try {
                    backEnd_request.post("get_opertaion_by_id", { operation_id: operation_id }).then((res) => {
                        setOperation(res.data.data);
                        setLoading(false);
                    });
                } catch (error) {
                    setError('Error fetching operation details');
                    setLoading(false);
                }
            };
            fetchOperation();
        }
    }, [operation_id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }



    return (
        <div className="container mt-5">
            <h1 className="text-cc mb-4">Treatment Operation Details<hr /></h1>

            {operation ? (
                <div className="card p-4 shadow-sm">
                    <div className="row mb-3">
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-user"></i> <strong>Patient: </strong>
                            <a href={`/user/profile?id=${operation.patient_record.patient.id}`} target='_blank' className="ml-2 text-capitalize">
                                {operation.patient_record.patient.name}
                            </a>
                        </div>
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-id-card"></i> <strong>Record ID:</strong> {operation.record_id}
                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-md-6 text-cc">
                            <i className="fa fa-user"></i> <strong>Student: </strong>
                            <a href={`/user/profile?id=${operation.patient_record.student.id}`} target='_blank' className="text-capitalize ml-2">
                                {operation.patient_record.student.name}
                            </a>
                        </div>
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-user-md"></i> <strong>Supervisor: </strong>
                            <a href={`/user/profile?id=${operation.patient_record.doctor.id}`} target='_blank' className="ml-2 text-capitalize">
                                {operation.patient_record.doctor.name}
                            </a>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-calendar"></i> <strong>Date:</strong> {operation.date}
                        </div>
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-wrench"></i> <strong>Tools:</strong> {operation.tools || 'N/A'}
                        </div>
                    </div>
                    <div className="row mb-3 text-cc">
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-tasks"></i> <strong>work to be done : <br /> </strong> {operation.work_1 || 'N/A'}
                        </div>
                        <div className="col-md-6">
                            <i className="fa fa-tasks"></i> <strong>The work that has been done : <br /></strong> {operation.work_2 || 'N/A'}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 text-cc">
                            <i className="fa fa-picture-o"></i> <strong>Image Before:</strong>
                        </div>

                        <div className="col-md-6 text-cc">
                            <i className="fa fa-picture-o"></i> <strong>Image After:</strong>
                        </div>
                        <hr />
                        <div className="col-md-6 text-cc">
                            {operation.image_before ? (
                                <img src={`${operation_image_folder}${operation.image_before}`} alt="Before" className="img-fluid" />
                            ) : (
                                <span> N/A</span>
                            )}
                        </div>
                        <div className="col-md-6 text-cc">
                            {operation.image_after ? (
                                <img src={`${operation_image_folder}${operation.image_after}`} alt="After" className="img-fluid" />
                            ) : (
                                <span> N/A</span>
                            )}
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <i className="fa fa-sticky-note"></i> <strong>Student Note:</strong> {operation.student_note || 'N/A'}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <i className="fa fa-check"></i> <strong>Result:</strong> {operation.result || 'N/A'}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <i className="fa fa-notes-medical"></i> <strong>Doctor Note:</strong> {operation.doctor_note || 'N/A'}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <i className="fa fa-info-circle"></i> <strong>State:</strong> {operation.state}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning" role="alert">
                    No operation found.
                </div>
            )}
            {/* Floating Button */}
            <div className="floating-menu">
                <button className="btn btn-primary rounded-circle px-3" onClick={() => setShowMenu(!showMenu)}>
                    <i className="fa fa-ellipsis-v"></i>
                </button>
                {showMenu && (
                    <div className="menu-options">

                        {user.id == operation.patient_record.student.id && operation.state != "closed" && (
                            <button className="dropdown-item text-capitalize" onClick={() => router.push('/student/close_operation?operation_id=' + operation.id)}>
                                {operation.state == "waiting docotor result" ? "edit treatment information" : "Close Opertaion"}
                            </button>
                        )}

                        {user.id == operation.patient_record.doctor.id && operation.state != "waiting" && operation.patient_record.state != "closed" && (
                            <button className="dropdown-item text-capitalize" onClick={() => router.push('/student/evaluate_operation?operation_id=' + operation.id)}>
                                {operation.state == "closed" ? "edit evaluation information" : "Evaluate Operation"}
                            </button>
                        )}

                        <button className="dropdown-item" onClick={() => {
                            router.push('/student/operation?record_id=' + operation.patient_record.id)
                        }}>medical record operation</button>


                        <button className="dropdown-item" onClick={() => {
                            router.push('/user/profile?id=' + operation.patient_record.patient.id)
                        }}>patient information</button>





                    </div>
                )}
            </div>

            {/* Styles for floating button and menu */}
            <style jsx>{`
    .floating-menu {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }
    .menu-options {
        position: absolute;
        bottom: 50px;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    .dropdown-item {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }
    .dropdown-item:last-child {
        border-bottom: none;
    }
    .dropdown-item:hover {
        background: #f8f9fa;
    }
`}</style>
        </div>
    );
}
