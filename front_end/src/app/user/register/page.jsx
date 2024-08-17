'use client';
import { useState } from "react";
import BackMethods from "@/logic/BackMethods";
import { useRouter } from 'next/navigation';
import Validator from "@/logic/Validator";
import { useSearchParams } from 'next/navigation';

export default function Register() {
    const { backEnd_request } = BackMethods();
    const { isEmpty, isValidEmail } = Validator();
    const [enablesubmit, setEnableSubmit] = useState(true);
    const router = useRouter();

    const searchParams = useSearchParams();
    const user_type = searchParams.get('type');

    // State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [type, setType] = useState('patient');
    const [gender, setGender] = useState("male");
    const [address, setAddress] = useState("");
    const [global_information, setGlobal_information] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [age, setAge] = useState(null);

    // Error data
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phone_numberError, setPhone_numberError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [formError, setFormError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [global_informationError, setGlobal_informationError] = useState('');
    const [imageError, setImageError] = useState('');
    const [ageError, setAgeError] = useState('');

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
            case 'name':
                setName(value);
                setNameError('');
                break;
            case 'phone_number':
                setPhone_number(value);
                setPhone_numberError('');
                break;
            case 'email':
                setEmail(value);
                setEmailError('');
                break;
            case 'password':
                setPassword(value);
                setPasswordError('');
                break;
            case 'address':
                setAddress(value);
                setAddressError('');
                break;
            case 'global_information':
                setGlobal_information(value);
                setGlobal_informationError('');
                break;
            case 'age':
                setAge(value);
                setAgeError('');
                break;
        }
    }

    const register = () => {
        setFormError("")


        setEnableSubmit(false);
        let valid = true;

        if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }
        if (isEmpty(name)) {
            setNameError('Name field cannot be empty');
            valid = false;
        }
        if (!file) {
            setImageError('You must choose a profile image');
            valid = false;
        }
        if (isEmpty(phone_number)) {
            setPhone_numberError('Phone number field cannot be empty');
            valid = false;
        }
        if (isEmpty(password)) {
            setPasswordError('Password field cannot be empty');
            valid = false;
        }
        if (isEmpty(global_information)) {
            setGlobal_informationError('Global information field cannot be empty');
            valid = false;
        }
        if (isEmpty(address)) {
            setAddressError('Address field cannot be empty');
            valid = false;
        }

        if (isEmpty(age)) {
            setAgeError('Age field cannot be empty');
            valid = false;
        }
        if (valid) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('name', name);
            formData.append('age', age);
            formData.append('phone', phone_number);
            if (user_type)
                formData.append('type', user_type);
            else
                formData.append('type', type);

            formData.append('gender', gender);
            formData.append('address', address);
            formData.append('global_information', global_information);
            if (file) formData.append('image', file);
console.log(file)
            backEnd_request.post('/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res);
                if (res.data.success == true) {
                    if (user_type) {
                        if (user_type == "doctor")
                            router.push('/user/user_list?type=doctor list');
                        else
                            router.push('/user/user_list?type=user list');
                    }
                    else

                        router.push('/user/login');
                }
                else {
                    setFormError(res.data.data)
                }
            }).catch(function (error) {
                setFormError(error.response.data.data)

            });
        }
        setEnableSubmit(true);
    }

    return (
        <div className="row justify-content-center pt-4">
            <div className="container-fluid  py-5" style={{ margin: "20px 0" }}>
                <div className="container py-5">
                    <div className="row align-items-center d-flex justify-content-center">
                        <div className="col-lg-6">

                            <div className="card shadow  ">
                                <div className="card-header  text-center p-4">
                                    <h3 className="text-light m-0"> Information</h3>
                                </div>
                                <div className="card-body rounded-bottom bg-white p-5">
                                    <form>
                                        <div className="form-group text-center">
                                            <div
                                                className="profile-img-container"
                                                style={{
                                                    display: 'inline-block',
                                                    width: '200px',
                                                    height: '200px',
                                                    borderRadius: '50%',
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
                                                        <span className="text-muted ">Click to upload</span>
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

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Your name"
                                                name="name"
                                                id="name"
                                                value={name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{nameError}</p>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                className="form-control p-4"
                                                placeholder="Your age"
                                                name="age"
                                                id="age"
                                                value={age}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{phone_numberError}</p>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Your phone"
                                                name="phone_number"
                                                id="phone_number"
                                                value={phone_number}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{phone_numberError}</p>
                                        </div>

                                        <div className="form-group">
                                            <select
                                                className="custom-select px-4 form-control"
                                                onChange={e => setGender(e.target.value)}
                                                style={{ height: "47px" }}
                                            >
                                                <option value="male" selected={gender === "male"}>Male</option>
                                                <option value="female" selected={gender === "female"}>Female</option>
                                            </select>
                                            <p className="text-danger">{genderError}</p>
                                        </div>


                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                placeholder="Your address"
                                                id="address"
                                                name="address"
                                                value={address}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{addressError}</p>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control p-4"
                                                placeholder="Your email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{emailError}</p>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control p-4"
                                                placeholder="Your password"
                                                id="password"
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{passwordError}</p>
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                className="form-control p-4"
                                                placeholder="Global Information"
                                                id="global_information"
                                                name="global_information"
                                                value={global_information}
                                                onChange={handleChange}
                                                required
                                            />
                                            <p className="text-danger">{global_informationError}</p>
                                        </div>
                                        {formError && (
                                            <div className="alert alert-danger" role="alert">
                                                {formError}
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            className={`btn btn-info btn-block py-3 ${!enablesubmit ? 'disabled' : ''}`}
                                            onClick={register}
                                        >
                                            Sign Up Now
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