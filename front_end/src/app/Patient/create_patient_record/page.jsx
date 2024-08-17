'use client';
import { useState, useEffect } from "react";
import BackMethods from "@/logic/BackMethods";
import { useRouter } from 'next/navigation';
import Validator from "@/logic/Validator";
import { useUser } from "@/logic/UserContext";
export default function Register() {
    const { backEnd_request, check_patient } = BackMethods();
    const { isEmpty } = Validator();
    const [enablesubmit, setEnableSubmit] = useState(true);
    const router = useRouter();
    const { user } = useUser();
    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // State
    const [global_information, setGlobal_information] = useState('');

    // Error data
    const [formError, setFormError] = useState('');

    const handleChange = event => {
        setInfoMsg("");
        setErrorMsg("");
        const { name, value, files } = event.target;
        switch (name) {
            case 'global_information':
                setGlobal_information(value);
                setFormError('');
                break;
        }
    }

    useEffect(() => {
        check_patient(user);
    }, []);

    const addPatientRecord = () => {
        setInfoMsg("");
        setErrorMsg("");
        setEnableSubmit(false);
        let valid = true;

        if (isEmpty(global_information)) {
            setGlobal_informationError('Global information field cannot be empty');
            valid = false;
        }
        if (valid) {
            const formData = new FormData();
            formData.append('global_information', global_information);
            formData.append('patient_id', user.id);

            backEnd_request.post('/create_patient_record', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                if (res.data.success == true) {
                    setInfoMsg(res.data.data);
                } else
                    setErrorMsg(res.data.data)

            }).catch(function (error) {
                setFormError(error.response.data.data)

            });
        }
        setEnableSubmit(true);
    }

    return (
        <div className="row justify-content-center pt-4">

            {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                <h2 className='text-center text-light'>{infoMsg}</h2>
            </div> : ""}
            {errorMsg ? <div className='bg-danger mt-5 py-3 container'>
                <h2 className='text-center text-light'>{errorMsg}</h2>
            </div> : ""}


            <div className="container-fluid  py-5" style={{ margin: "20px 0" }}>
                <h1 className="text-center text-secondary">Create New Medicine Record</h1>

                <h3 className="text-center text-dark">Describe your state bellow</h3>
                <hr />
                <div className="container py-5">
                    <div className="row align-items-center d-flex justify-content-center">
                        <div className="col-lg-6">

                            <div className="card shadow  ">
                                <div className="card-header bg-info text-center p-4">
                                    <h3 className="text-light m-0 text-capitalize">your state description</h3>
                                </div>
                                <div className="card-body rounded-bottom bg-white p-5">
                                    <form>

                                        <div className="form-group my-3">
                                            <textarea
                                                className="form-control p-4"
                                                placeholder="Global Information"
                                                id="global_information"
                                                name="global_information"
                                                value={global_information}
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
                                            onClick={addPatientRecord}
                                        >
                                            Create record
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
