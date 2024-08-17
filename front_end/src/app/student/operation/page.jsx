'use client';
import { useState, useEffect } from 'react';
import BackMethods from '@/logic/BackMethods';
import $ from 'jquery';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // استيراد useRouter
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/logic/UserContext';
import PatientOperationCard from './patient_operation_card';
import PatientOperationCard1 from './patient_operation_card1';
export default function PatientRecords() {
    const { backEnd_request, check_patient, user_image_folder } = BackMethods();
    const router = useRouter();
    const searchParams = useSearchParams();
    const record_id = searchParams.get('record_id');
    const type = searchParams.get('type');

    const [record, setRecord] = useState("");
    const [operations, setOperations] = useState("");
    const { user } = useUser();
    const [search, setSearch] = useState("");
    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // State to manage the visibility of the floating menu
    const [showMenu, setShowMenu] = useState(false);
    const filter = (text) => {
        var value = text;
        $("#myTable #x ").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });


    }
    const getPatientRecord = () => {
        if (record_id != null)
            backEnd_request.post("get_patient_record_by_id", { record_id: record_id }).then((res) => {
                console.log(res.data.data);
                setRecord(res.data.data);
                setOperations(res.data.data.operations);
            });
        else {
            if (user) {
                var url = "getPatientOperations"
                if (type == "student")
                    url = "getStudentOperations"
                else if (type == "doctor")
                    url = "getDoctorOperations"

                backEnd_request.post(url, { id: user.id }).then((res) => {
                    console.log(res);
                    //setRecord(res.data.data);
                    setOperations(res.data.data);
                });
            }
        }
    }



    useEffect(() => {
        getPatientRecord();
    }, [record_id || type]);

    const Operations = () => {
        return operations.map((item, index) => (
            record_id != null ? PatientOperationCard(item, record, index, setInfoMsg, setErrorMsg) : PatientOperationCard1(item, index, setInfoMsg, setErrorMsg)

        ));
    }

    if (record || operations)
        return (

            <div>
                <div className=" pt-5 pb-5 bg-light mt-5 ">
                    <h1 className="text-primary text-align-center text-center text-uppercase" style={{ letterSpacing: "5px" }}>
                        Patient treatment Information
                    </h1>
                    <br />
                    <h3 className="text-center text-capitalize">Medical Record opertation Cards</h3>
                    <hr />
                    <div className="container-fluid">
                        <input value={search} className="form-control package-item mb-0" id="myInput" type="hidden" placeholder="Search.." />
                        <br />

                        <div className='row d-flex justify-content-center' id="myTable">
                            {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                                <h2 className='text-center text-light'>{infoMsg}</h2>
                            </div> : ""}
                            {errorMsg ? <div className='bg-danger mt-5 mb-4 py-3 container'>
                                <h2 className='text-center text-light'>{errorMsg}</h2>
                            </div> : ""}

                            <Operations />
                        </div>
                    </div>
                </div>

                {/* Floating Button */}
                <div className="floating-menu">
                    <button className="btn btn-primary rounded-circle px-3" onClick={() => setShowMenu(!showMenu)}>
                        <i className="fa fa-ellipsis-v"></i>
                    </button>
                    {showMenu && (
                        <div className="menu-options">

                            {record && record.state == 'confirmed' && record.student && user.id == record.student.id &&
                                (
                                    <button className="dropdown-item" onClick={() => router.push('/student/add_operation?record_id=' + record.id)}>Add Operation</button>
                                )}

                            <button className="dropdown-item" onClick={() => {
                                filter("waiting..");
                            }}>waiting record</button>


                            <button className="dropdown-item" onClick={() => {
                                filter("closed");
                            }}>closed record</button>

                            <button className="dropdown-item" onClick={() => {
                                filter("wait doctor");
                            }}>waiting doctor record</button>
                            <button className="dropdown-item" onClick={() => {
                                filter("");
                            }}>All record</button>




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


            </div >
        );

    return (<div className='mt-5 pt-5'>
        {getPatientRecord()}
        loading....</div>);
}
