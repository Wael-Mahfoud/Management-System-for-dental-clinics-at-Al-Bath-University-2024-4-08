'use client';
import { useState, useEffect, use } from 'react'
import BackMethods from '@/logic/BackMethods';
import $ from "jquery";
import style from './style.module.css';
import './style.module.css';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // استيراد useRouter
import { useSearchParams } from 'next/navigation';

import { useUser } from '@/logic/UserContext';

export default function StudentRecords() {
    const { backEnd_request, check_patient } = BackMethods();
    const [records, setRecords] = useState("");
    const { user } = useUser();
    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');


    const getPatientRecords = () => {
        var url = '/get_all_student_patient_records'

        if (user) {
            console.log(user.type);
            if (user.type == "doctor")
                url = '/get_all_doctor_patient_records'


            backEnd_request.post(url,
                { user_id: user.id }
            ).then((res) => {
                console.log(res.data.data);
                setRecords(res.data.data);
            });
        }
    }

    const cancelRecord = (id) => {
        setErrorMsg("");
        setInfoMsg("");
        if (user)
            backEnd_request.post('/cancel_patient_record',
                { id: id }
            ).then((res) => {

                if (res.data.success == true) {
                    setInfoMsg(res.data.data);
                    getPatientRecords()


                } else
                    setErrorMsg(res.data.data)
            });
    }
    const closeRecord = (id) => {
        setErrorMsg("");
        setInfoMsg("");
        if (user)
            backEnd_request.post('/finish_patient_records',
                { id: id }
            ).then((res) => {

                if (res.data.success == true) {
                    setInfoMsg(res.data.data);
                    getPatientRecords()


                } else
                    setErrorMsg(res.data.data)
            });
    }



    useEffect(() => {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    useEffect(() => {
        //     check_patient(user);
    }, []);
    useEffect(() => {
        getPatientRecords();
    }, []);



    const Records = () => {

        return records.map((item, index) => (
            <tr key={item.id} className='  '>
                <th scope="row"><h6 className='text-center'>{++index}</h6></th>
                <td className='style.tdWidth tdWidth'><h6 className='text-center text-dark mx-1 '>{item.global_information}
                </h6> </td>
                <td className='text-center  ' onClick={() => router.push(`/user/profile?id=${item.patient.id}`)}><h6 className='text-dark'>
                    {item.patient ? <div>
                        <div className=''> {item.patient.name}</div>
                        <div className=' my-1'>
                            {item.patient.gender} <i className='text-primary fa fa-male'></i></div>
                        <span className=''>{item.patient.phone} <i className='text-primary fa fa-phone'></i></span>
                    </div> : "not confirmed "}
                </h6></td>
                <td> <h6 className='text-center'>{item.state} </h6></td>
                <td className='text-center' ><h6 className='text-primary'>
                    {item.student ? <div onClick={() => router.push(`/user/profile?id=${item.student.id}`)}>
                        <div className='text-primary'>
                            {item.student.name}</div>
                        <div className=' my-1'>
                            {item.student.gender} <i className='fa fa-male'></i></div>
                        <span className='text-primary'>{item.student.phone} <i className='fa fa-phone'></i></span>
                    </div> : "not confirmed"}
                </h6></td>
                <td className='text-center'><h6 className='text-success'>
                    {item.doctor ? <div onClick={() => router.push(`/user/profile?id=${item.doctor.id}`)}>
                        <div className=''> {item.doctor.name}</div>
                        <div className=' my-1'>
                            {item.doctor.gender} <i className='fa fa-male'></i></div>
                        <span className=''>{item.doctor.phone} <i className='fa fa-phone'></i></span>
                    </div> : "not confirmed "}
                </h6></td>

                <td className='tdMDWidth'> <h6 className='text-center'>
                    <span className='text-danger'>
                        {item.open_date}
                    </span>
                    <br />
                    <span className='text-success'>
                        {item.confirm_date ? item.confirm_date : 'waiting'}
                    </span>
                    <br />
                    <span className='text-primary'>{item.close_date ? item.close_date : 'waiting'}</span>

                </h6></td>

                <td className='tdMDWidth'>
                    {user.type == "student" && user.id == item.student.id ?
                        <button className='btn btn-danger form-control my-1' onClick={() => cancelRecord(item.id)}> Cancel <i className='fa fa-trash'></i></button>
                        :
                        item.state != "closed" &&
                        <button className='btn btn-success form-control my-1' onClick={() => closeRecord(item.id)}>
                            Close <i className='fa fa-check'></i></button>
                    }

                    <button className='btn btn-info form-control my-1' onClick={() => router.push('/student/operation?record_id=' + item.id)}>
                        Treatment <i className=' fa fa-info-circle'></i> </button>
                </td>

            </tr >));


    }




    if (records)
        return (<div className='bg-white'>
            {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                <h2 className='text-center text-light'>{infoMsg}</h2>
            </div> : ""}
            {errorMsg ? <div className='bg-danger mt-5 py-3 container'>
                <h2 className='text-center text-light'>{errorMsg}</h2>
            </div> : ""}
            <div className=" pt-5   pb-5  bg-light mt-5 " >
                <h1 className=" text-success text-align-center text-center text-uppercase" style={{ letterSpacing: " 5px" }}>Patient Records table</h1>
                <h3 className="text-center text-info ">Medican state Table</h3>
                <hr />
                <br />
                <div className=" container ">
                    <br />
                    <input className="form-control package-item mb-0" id="myInput" type="text" placeholder="Search.." />

                    <hr />
                    <div className="table-responsive  ">
                        <table className="table table-bordered  table-striped table-light shadow mb-0 package-item">
                            <thead className=''>
                                <tr className=' '>
                                    <th scope="col b"><h5 className='  text-center'>#</h5></th>

                                    <th scope="col b " className={style.tdWidth}><h5 className='  text-center'>Information <i className='fa fa-info-circle'></i></h5></th>
                                    <th scope="col b " className={style.tdMDWidth}><h5 className='  text-center'>Patient <i className='fa fa-user'></i> </h5></th>

                                    <th scope="col b"><h5 className='  text-center '>State</h5></th>
                                    <th scope="col b" className={style.tdMDWidth}><h5 className='  text-center '>Student <i className='fa fa-user'></i> </h5></th>

                                    <th scope="col b " className={style.tdMDWidth}><h5 className='  text-center'>Doctor <i className='fa fa-user'></i> </h5></th>
                                    <th scope="col b "><h5 className='  text-center'>Date <i className='fa fa-calendar'></i> </h5></th>

                                    <th scope="col b " className={style.tdMDWidth}><h5 className='  text-center'>Manage <i className='fa fa-edit'></i> </h5></th>
                                </tr>
                            </thead>
                            <tbody id="myTable" >
                                <Records data={records} />
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >


        </div>)
    { getPatientRecords() }
    return (<div className='mt-5 pt-5'>loading....</div>)



}