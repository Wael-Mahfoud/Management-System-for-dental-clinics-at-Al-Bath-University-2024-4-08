import { NextPage } from "next";
import dynamic from "next/dynamic";
// import { authProvider } from "@/authoProvider";
// import {dataProvider} from "@/components/AdminApp"
const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

const Admin = () => {
    return <AdminApp />;
};

export default Admin;
