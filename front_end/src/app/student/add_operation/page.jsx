'use client';
import { useState, useEffect } from "react";
import BackMethods from "@/logic/BackMethods";
import { useRouter } from 'next/navigation';
import Validator from "@/logic/Validator";
import { useUser } from "@/logic/UserContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from 'next/navigation';
//import './cardStyle.css';
export default function AddOperation() {
    const { backEnd_request, check_patient } = BackMethods();
    const { isEmpty } = Validator();
    const [enablesubmit, setEnableSubmit] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const record_id = searchParams.get('record_id');


    const { user } = useUser();


    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // State
    const [work_1, setwork_1] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');

    // Error data
    const [formError, setFormError] = useState('');

    const handleChange = event => {
        const { name, value, files } = event.target;
        switch (name) {
            case 'image':
                if (files && files[0]) {
                    setImage(URL.createObjectURL(files[0]));
                    setFile(files[0]);
                }
                setImageError('');
                break;
            case 'work_1':
                setwork_1(value);
                setFormError('');
                break;

        }
    }



    useEffect(() => {
        //        check_patient(user);
    }, []);

    const addRecordOpertation = () => {
        setInfoMsg("");
        setErrorMsg("");
        setEnableSubmit(false);
        let valid = true;

        if (isEmpty(work_1)) {
            setFormError('Work field cannot be empty');
            //  valid = false;
        }
        const formattedDate = dateTime.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', ''); // Remove the comma between date and time
        if (valid) {
            const formData = new FormData();
            formData.append('work_1', work_1);
            formData.append('date', formattedDate);
            formData.append('record_id', record_id);
            if (file) formData.append('image_before', file);

            backEnd_request.post('/add_opertaion', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    setInfoMsg(res.data.data);
                    router.push('/student/operation?record_id=' + record_id);
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
                <h1 className="text-center text-secondary">Create New Medical Record Operation</h1>
                <h3 className="text-center text-dark">Fill in the details below</h3>
                <hr />
                {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                    <h2 className='text-center text-light'>{infoMsg}</h2>
                </div> : ""}
                {errorMsg ? <div className='bg-danger mt-5 py-3 container'>
                    <h2 className='text-center text-light'>{errorMsg}</h2>
                </div> : ""}

                <div className="container py-5">
                    <div className="row align-items-center d-flex justify-content-center">

                        <div className="col-lg-6">
                            <div className="card ">
                                <div className="card-header  text-center p-4">
                                    <h3 className="text-light m-0 text-capitalize">Appointment Information</h3>
                                </div>

                                <div className="card-body  rounded-bottom bg-white p-5">

                                    <form className="text-center row d-flex justify-content-center">
                                        <div className="col-10 my-3 text-center">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Work to be done...."
                                                id="work_1"
                                                name="work_1"
                                                value={work_1}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 my-3">
                                            <DatePicker
                                                selected={dateTime}
                                                onChange={(date) => setDateTime(date)}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                className="form-control  p-4"
                                                placeholderText="Select date and time"
                                                required
                                            />
                                        </div>
                                        <div className="row text-center">
                                            <div
                                                className="profile-img-container form-control"
                                                style={{
                                                    display: 'inline-block',
                                                    width: '300px',
                                                    height: '300px',
                                                    borderRadius: '5%',
                                                    overflow: 'hidden',
                                                    border: '2px solid #ddd',
                                                    cursor: 'pointer',
                                                    backgroundColor: '#f5f5f5',

                                                    position: 'relative'
                                                }}
                                                onClick={() => document.querySelector('input[name="image"]').click()}
                                            >
                                                {image ? (
                                                    <img
                                                        src={image}
                                                        alt="Profile"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <div>
                                                        <br />
                                                        <span className="text-muted ">Click to upload patient state image before load</span>
                                                    </div>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                name="image"
                                                accept="image/*"
                                                onChange={handleChange}
                                                style={{ display: 'none' }}
                                            />
                                            <p className="text-danger">{imageError}</p>
                                        </div>

                                        {formError && (
                                            <div className="alert alert-danger" role="alert">
                                                {formError}
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            className={`btn btn-info btn-block form-control py-3 ${!enablesubmit ? 'disabled' : ''}`}
                                            onClick={addRecordOpertation}
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
