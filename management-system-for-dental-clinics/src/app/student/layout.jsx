// import { Children } from "react";
import Footer from "../components/Footer/Footer";
import StudentProfile from "./page";
import StudentNav from "./components/studentNav/studentNav";
// import { Children } from "react";

export default function layout({children}) {
  return (
<div>
<StudentNav/>
<hr/>
<div>
{children}
</div>
<hr/>
 <Footer/>
    </div>
  )
}
