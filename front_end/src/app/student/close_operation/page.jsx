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
    const operation_id = searchParams.get('operation_id');


    const { user } = useUser();


    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // State
    const [work_2, setwork_2] = useState('');
    const [tools, setTools] = useState('');
    const [note, setNote] = useState('');

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');

    // Error data
    const [formError, setFormError] = useState('');

    const handleChange = event => {
        setFormError('');
        const { name, value, files } = event.target;
        switch (name) {
            case 'image':
                if (files && files[0]) {
                    setImage(URL.createObjectURL(files[0]));
                    setFile(files[0]);
                }
                break;
            case 'work_2':
                setwork_2(value);
                break;
            case 'tools':
                setTools(value);
                break;
            case 'note':
                setNote(value);
                break;
        }
    }



    useEffect(() => {
        //        check_patient(user);
    }, []);

    const closeRecordOpertation = () => {
        setInfoMsg("");
        setErrorMsg("");
        setEnableSubmit(false);
        let valid = true;

        if (isEmpty(work_2)) {
            setFormError('Work field cannot be empty');
            valid = false;
        }
        if (isEmpty(tools)) {
            setFormError('Used tools field cannot be empty');
            valid = false;
        }
        if (isEmpty(note)) {
            setFormError('Student note field cannot be empty');
            valid = false;
        }


        if (valid) {
            const formData = new FormData();
            formData.append('work_2', work_2);
            formData.append('tools', tools);
            formData.append('operation_id', operation_id);
            formData.append('student_note', note);

            if (file) formData.append('image_after', file);

            backEnd_request.post('/close_opertaion', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    setInfoMsg(res.data.data);
                    router.push('/student/operation_info?operation_id=' + operation_id);
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
                <h1 className="text-center text-secondary">Close Medical Record Operation</h1>
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
                                    <h3 className="text-light m-0 text-capitalize">Treatment Information</h3>
                                </div>

                                <div className="card-body  rounded-bottom bg-white p-5">

                                    <form className="text-center row d-flex justify-content-center">
                                        <div className="col-10 my-3 text-center">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Work has been done...."
                                                id="work_2"
                                                name="work_2"
                                                value={work_2}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>


                                        <div className="col-10 my-3 text-center">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Used tools...."
                                                id="tools"
                                                name="tools"
                                                value={tools}
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
                                                        className="image-responsive"
                                                        style={{ width: '100%', height: '100%', objectFit: 'fit' }}
                                                    />
                                                ) : (
                                                    <div>
                                                        <br />
                                                        <span className="text-muted ">Click to upload patient state image after treatment</span>
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
                                            onClick={closeRecordOpertation}
                                        >
                                            Finish Treatment
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
