'use client';
import { useState, useEffect, use } from 'react'
import BackMethods from '@/logic/BackMethods';
import $ from "jquery";
import style from './style.module.css';
import './style.module.css';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // استيراد useRouter
import { useUser } from '@/logic/UserContext';
import { useSearchParams } from 'next/navigation';


export default function Userlist() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const { backEnd_request, check_patient } = BackMethods();
    const router = useRouter();

    const { user } = useUser();//loged in user
    const [users, setUsers] = useState("");//user List


    //message
    const [infoMsg, setInfoMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const getUserList = () => {
        var url = "/get_student_list";//default get student list
        if (type == "patient list")
            url = "/get_patient_list";
        else if (type == "doctor list") {
            url = "/get_doctor_list";
        }
        backEnd_request.post(url).then((res) => {
            console.log(res.data.data);
            setUsers(res.data.data);

        });
    }
    const enableDisableAccoumt = (id, isEnabled) => {
        setErrorMsg("");
        setInfoMsg("");

        var url = "/enable_user_account";
        if (isEnabled)
            url = "/disable_user_account"

        backEnd_request.post(url, { user_id: id }).then((res) => {
            if (res.data.success == true) {
                setInfoMsg(res.data.data);
                getUserList()

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
        //            check_patient(user);
    }, []);



    useEffect(() => {
        setInfoMsg("")
        getUserList();
    }, [type]);



    const Users = () => {

        return users.map((item, index) => (
            <tr key={item.id} className='  '>
                <th scope="row"><h6 className='text-center'>{index}</h6></th>

                <td >
                    <h6 className='text-center text-dark'>  {item.name} </h6>
                </td>

                <td >
                    <h6 className='text-center text-dark'>  {item.gender} </h6>
                </td>

                <td >
                    <h6 className='text-center text-dark'>  {item.age} </h6>
                </td>

                <td >
                    <h6 className='text-center text-dark'>  {item.phone} </h6>
                </td>

                <td >
                    <h6 className='text-center text-dark'>  {item.email} </h6>
                </td>

                <td >
                    <h6 className='text-center text-dark text-capitalize'>  {item.enabled ? "enabled" : "disabled"} </h6>
                </td>

                <td className=' d-flex justify-content-center'>
                    <button className='btn btn-primary  my-1 px-3 mx-1' onClick={() => router.push('/user/profile?id=' + item.id)}> profile <i className='fa fa-user'></i></button>

                    {item.enabled ?
                        <button className='btn btn-danger  my-1 px-3 mx-1' onClick={() => enableDisableAccoumt(item.id, item.enabled)}> disable <i className='fa fa-trash'></i></button>
                        :
                        <button className='btn btn-success  my-1 px-3 mx-1' onClick={() => enableDisableAccoumt(item.id, item.enabled)}> enable <i className='fa fa-trash'></i></button>
                    }

                </td>


            </tr >));


    }




    if (users)
        return (<div>
            {infoMsg ? <div className='bg-info mt-5 py-3 container'>
                <h2 className='text-center text-light'>{infoMsg}</h2>
            </div> : ""}
            {errorMsg ? <div className='bg-danger mt-5 py-3 container'>
                <h2 className='text-center text-light'>{errorMsg}</h2>
            </div> : ""}

            <div className=" pt-5   pb-5  bg-light mt-5   " >
                <h1 className="text-primary text-align-center text-center text-uppercase" style={{ letterSpacing: " 5px" }}>{type}</h1>
                <h3 className="text-center text-capitalize"> manage {type} from here</h3>
                <br />
                <div className=" container ">

                    <input className="form-control mb-0 bg-white text-success" id="myInput" type="text" placeholder="Search.." />


                    <div className="table-responsive  shadow">
                        <table className="table table-bordered  table-striped table-light shadow mb-0 ">
                            <thead className=''>
                                <tr className=' '>
                                    <th scope="col b"><h5 className='  text-center'>#</h5></th>
                                    <th scope="col b " ><h5 className='  text-center'>Name <i className='fa fa-person-circle'></i></h5></th>
                                    <th scope="col b"><h5 className='  text-center'>Gender <i className='fa fa-venus-mars'></i> </h5></th>
                                    <th scope="col b"><h5 className='  text-center'>AGE <i className='fa fa-calendar'></i> </h5></th>
                                    <th scope="col b"><h5 className='  text-center '>Phone <i className='fa fa-phone'></i></h5></th>
                                    <th scope="col b"><h5 className='  text-center '>Email <i className='fa fa-envelope'></i> </h5></th>
                                    <th scope="col b"><h5 className='  text-center'>Status <i className='fa fa-info-circle'></i> </h5></th>
                                    <th scope="col b"><h5 className='  text-center'>Manage <i className='fa fa-edit'></i> </h5></th>
                                </tr>
                            </thead>
                            <tbody id="myTable" >
                                <Users data={users} />
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >


        </div>)
    else
        return (<div className='mt-5 pt-5'>loading....</div>)
}


