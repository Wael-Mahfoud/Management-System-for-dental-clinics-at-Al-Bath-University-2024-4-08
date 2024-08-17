'use client';
import { useState, useEffect } from "react";
import BackMethods from "@/logic/BackMethods";
import { useRouter } from 'next/navigation';
import Validator from "@/logic/Validator";
import { useUser } from "@/logic/UserContext";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from 'next/navigation';
//import './cardStyle.css';
export default function AddOperation() {
    const { backEnd_request, check_patient } = BackMethods();
    const { isEmpty } = Validator();
    const [enablesubmit, setEnableSubmit] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const operation_id = searchParams.get('operation_id');


    const { user } = useUser();


    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // State
    const [degree, setDegree] = useState('');
    const [note, setNote] = useState('');


    // Error data
    const [formError, setFormError] = useState('');

    const handleChange = event => {
        setFormError('');
        const { name, value, files } = event.target;
        switch (name) {
            case 'degree':
                setDegree(value);
                break;
            case 'note':
                setNote(value);
                break;
        }
    }


    const evaluateRecordOpertation = () => {
        setInfoMsg("");
        setErrorMsg("");
        setEnableSubmit(false);
        let valid = true;

        if (isEmpty(degree)) {
            setFormError('degree field cannot be empty');
            valid = false;
        }
        if (isEmpty(note)) {
            setFormError('Student note field cannot be empty');
            valid = false;
        }


        if (valid) {
            const formData = new FormData();
            formData.append('result', degree);
            formData.append('operation_id', operation_id);
            formData.append('doctor_note', note);
            backEnd_request.post('/evaluating_operatoin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    setInfoMsg(res.data.data);
                    //router.push('/student/operation_info?operation_id=' + operation_id);
                } else {
                    setErrorMsg(res.data.data);
                }
            }).catch(function (error) {
                setFormError(error.response.data.data);
            });
        }
        setEnableSubmit(true);
    };

    return (
        <div className="row justify-content-center pt-4">

            <div className="container-fluid py-5" style={{ margin: "20px 0" }}>
                <h1 className="text-center text-secondary">Evaluate Medical Record Operation</h1>
                <h3 className="text-center text-dark text-bold bold">  Fill in the details below</h3>
                <hr />
                {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                    <h3 className='text-center text-light'>{infoMsg} click<a className="btn text-light"
                        onClick={() => router.push('/student/operation_info?operation_id=' + operation_id)}><h3>here</h3></a>
                        to open treatment information</h3>
                </div> : ""}
                {errorMsg ? <div className='bg-danger mt-5 py-3 container'>
                    <h2 className='text-center text-light'>{errorMsg}</h2>
                </div> : ""}

                <div className="container py-5">
                    <div className="row align-items-center d-flex justify-content-center">

                        <div className="col-lg-6">
                            <div className="card ">
                                <div className="card-header  text-center p-4">
                                    <h3 className="text-light m-0 text-capitalize">Treatment Information</h3>
                                </div>

                                <div className="card-body  rounded-bottom bg-white p-5">

                                    <form className="text-center row d-flex justify-content-center">
                                        <div className="col-10 my-3 text-center">
                                            <input
                                                type="number"
                                                className="form-control p-4"
                                                placeholder="student degree...."
                                                id="degree"
                                                name="degree"
                                                value={degree}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>


                                        <div className="col-10 my-3 text-center">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Your note about state...."
                                                id="note"
                                                name="note"
                                                value={note}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {formError && (
                                            <div className="alert alert-danger" role="alert">
                                                {formError}
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            className={`btn btn-info btn-block form-control py-3 ${!enablesubmit ? 'disabled' : ''}`}
                                            onClick={evaluateRecordOpertation}
                                        >
                                            Save Information
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
