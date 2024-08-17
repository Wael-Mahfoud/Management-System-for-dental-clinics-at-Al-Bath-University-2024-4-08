'use client';
import { useState, useEffect, use } from 'react'
import BackMethods from '@/logic/BackMethods';
import $ from "jquery";
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // استيراد useRouter
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/logic/UserContext';
import PatientCard from './patient_card';


export default function PatientRecords() {

    const { backEnd_request, check_patient, user_image_folder } = BackMethods();
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');


    const [records, setRecords] = useState("");
    const { user } = useUser();
    const [doctors, setDoctors] = useState([]); // New state for list of doctors

    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const getPatientRecords = () => {
        var url = "get_waited_patient_records";
        if (type == "all")
            url = "get_all_patient_records";

        if (user)
            backEnd_request.post(url,).then((res) => {
                console.log(res.data.data);
                setRecords(res.data.data);
            });
    }
    useEffect(() => {
        // Fetch doctors list from backend
        backEnd_request.post('/get_doctor_list')
            .then((res) => {
                setErrorMsg("")

                if (res.data.success) {
                    setDoctors(res.data.data); // Assuming the doctors are returned in res.data.data
                }
            })
            .catch(error => {
                setErrorMsg("Error loading doctors list");
            });
    }, []);

    useEffect(() => {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myTable #d").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    useEffect(() => {
        //  check_patient(user);
    }, []);
    useEffect(() => {
        getPatientRecords();
    }, [type]);



    const Records = () => {

        return records.map((item, index) => (
            PatientCard(item, index, setInfoMsg, setErrorMsg, getPatientRecords, doctors)




        ));


    }




    if (records)
        return (<div>
            <div className=" pt-5   pb-5  bg-light mt-5  " >
                <h1 className="text-primary text-align-center text-center text-uppercase" style={{ letterSpacing: " 5px" }}>Patient Records information</h1>
                <br />
                <h1 className="text-center text-capitalize">Medical records cards</h1>
                <hr />
                <div className=" container-fluid ">
                    <input className="container form-control package-item mb-0" id="myInput" type="text" placeholder="Search.." />
                    <br />

                    <div className='row d-flex justify-content-center' id="myTable">
                        {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                            <h2 className='text-center text-light'>{infoMsg}</h2>
                        </div> : ""}
                        {errorMsg ? <div className='bg-danger mt-5 mb-4 py-3 container'>
                            <h2 className='text-center text-light'>{errorMsg}</h2>
                        </div> : ""}

                        <Records />
                    </div>
                </div >
            </div >


        </div>)
    { getPatientRecords() }
    return (<div className='mt-5 pt-5'>loading....</div>)



}