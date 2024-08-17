import axios from 'axios';
import { use, useState } from "react"

// { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; // استيراد useRouter

export default function BackMethods() {
    const serverUrl = 'http://localhost:8000/'
    //  const serverUrl = 'http://192.168.43.217:8000/'
    const imgUrl = serverUrl + 'images/';
    const user_image_folder = imgUrl + 'user_images/';
    const operation_image_folder = imgUrl + 'operation_images/';

    const router = useRouter();

    const notificationImageUrl = imgUrl + 'coin_notification_imgaes/'
    //get token of loged in user
    const getToken = () => {
        const tokenString = localStorage.getItem('user');
        const userToken = JSON.parse(tokenString);
        return userToken;

    }

    // get loged in user informaiton
    const getUser = () => {
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;

    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    // save token to session
    const saveUser = (user/*, token*/) => {
        //setToken(token);
        setUser(user);
        //save roken and user informaiton
        //  localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/');

    }
    const check_patient = (user/*, token*/) => {
        if (!user)
            router.push('/');

        else if (user.type != "patient")
            router.push('/');

    }

    // logout user and clear session information
    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setToken(undefined);
    }


    // create axios request object
    const backEnd_request = axios.create({
        baseURL: serverUrl + "api",
        headers: {
            'Content-type': "  multipart/form-data",
            'Authorization': `Bearer ${token}`
        }

    });



    const checkUserLogin = () => {
        console.log(token);
        if (token == undefined) {
            navigate('/login');
            return false;
        }
        return true;
    }
    const UserAvatar = () => (
        <div className="nav-link container btn  rounded-circle  " onClick={() => (console.log(''))}>
            <img src={'http://192.168.43.107:8000/images/' + user.image} alt="avatar"
                class="rounded-circle d-flex align-self-start  shadow-1-strong package-item"
                style={{ maxWidth: '55px', boxShadow: " 1px 1px 1px 1px  " }} />
        </div>

    )


    return {
        setToken: saveUser, imgUrl, check_patient,
        token,
        user,
        getToken,
        getUser,
        backEnd_request,
        logout,
        checkUserLogin, user_image_folder, operation_image_folder

    };
}