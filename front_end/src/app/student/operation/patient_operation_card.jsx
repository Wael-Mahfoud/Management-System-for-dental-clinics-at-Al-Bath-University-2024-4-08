import { useUser } from '@/logic/UserContext';
import BackMethods from '@/logic/BackMethods';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PatientOperationCard(item, record, index, setInfoMsg, setErrorMsg) {
    const { user, logout } = useUser();
    const { backEnd_request, check_patient, operation_image_folder } = BackMethods();
    const router = useRouter();

    const confirmPatientRecord = (id) => {
        setErrorMsg("");
        setInfoMsg("");
        if (user)
            backEnd_request.post('/confirm_patient_records',
                {
                    id: id,
                    student_id: user.id
                }
            ).then((res) => {

                if (res.data.success === true) {
                    setInfoMsg(res.data.data);
                    getPatientRecords();

                } else {
                    setErrorMsg(res.data.data);
                }
            });
    };

    // اختر الألوان والأيقونات بناءً على الحالة
    const getCardStyle = (state) => {
        switch (state) {
            case "waiting":
                return {
                    borderColor: 'orange',
                    badgeColor: 'bg-warning',
                    icon: 'fa fa-hourglass-half', // أيقونة بديلة
                    buttonClass: 'btn btn-warning',
                    buttonText: 'Confirm'
                };
            case "closed":
                return {
                    borderColor: 'green',
                    badgeColor: 'bg-success',
                    icon: 'fa fa-times-circle',
                    buttonClass: 'btn btn-success',
                    buttonText: 'Closed'
                };
            case "waiting_doctor":
                return {
                    borderColor: 'green',
                    badgeColor: 'bg-success',
                    icon: 'fa fa-stethoscope',
                    buttonClass: 'btn btn-info',
                    buttonText: 'Treatment'
                };
            default:
                return {
                    borderColor: 'blue',
                    badgeColor: 'bg-info',
                    icon: 'fa fa-info-circle',
                    buttonClass: 'btn btn-primary',
                    buttonText: 'Unknown'
                };
        }
    };

    const { borderColor, badgeColor, icon, buttonClass, buttonText } = getCardStyle(item.state);

    return (
        <div id="x" className='my-2'  >
            <div className='d-flex justify-content-center'>
                <div className='card m-2 col-12 shadow d-flex flex-row align-items-stretch'
                    style={{ borderColor: borderColor, borderWidth: '2px', borderStyle: 'groove', position: 'relative', maxWidth: '800px' }} >
                    {/* شارة الحالة في الزاوية العلوية اليسرى */}

                    <span className={`badge ${badgeColor} text-light position-absolute shadow`} style={{ top: '10px', left: '-10px', padding: '10px', borderRadius: '0 10px 10px 0' }}>
                        {item.state}
                    </span>
                    <div className='card-body d-flex flex-column justify-content-between col-7'>
                        <div>
                            <br /><br />

                            <h5>
                                <i className='fa fa-user text-primary'></i>:
                                <span className='btn' onClick={() => router.push(`/user/profile?id=${record.patient.id}`)}>
                                    <h5>{record.patient.name}</h5>
                                </span>
                            </h5>
                            <h5>
                                <i className='fa fa-calendar text-primary'></i>: {item.date}
                            </h5>
                            <h5>
                                <i className={icon + ' text-success'}></i>: {item.state}
                            </h5>
                            <h5>
                                <i className='fa fa-tasks text-info'></i> result: {item.result ? item.result : item.state === "waiting" ? "Waiting..." : "wait doctor"}
                            </h5>
                            <hr />
                        </div>
                        <div className='text-center'>
                            <button className=" btn btn-dark btn-block mx-2 text-capitalize" onClick={() => router.push("/student/operation_info?operation_id=" + item.id)}>
                                Info... <i className="fa fa-info-circle"></i>
                            </button>

                            <button className={`${buttonClass} btn-block text-light text-capitalize`} onClick={() => router.push('/user/profile?id=' + record.patient.id)}>
                                {record.patient.name} profile <i className="fa fa-user"></i>
                            </button>

                        </div>
                    </div>

                    <div className="col-5 d-flex">
                        <div className="profile-header rounded m-2 " style={{ overflow: 'hidden', width: '100%' }}>
                            <a href={operation_image_folder + item.image_before} target='_blank' rel='noopener noreferrer'>
                                <img
                                    src={operation_image_folder + item.image_before} // صورة افتراضية إذا لم تكن الصورة موجودة
                                    alt="status image"
                                    className="img-fluid shadow"
                                    style={{ width: '100%', height: '100%', maxHeight: '300px', objectFit: 'fit', borderRadius: '0 0.25rem 0.25rem 0' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div></div >
    );
}
