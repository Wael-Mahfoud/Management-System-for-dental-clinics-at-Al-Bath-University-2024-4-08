import Footer from "../components/Footer/Footer";
import StudentProfile from "./page";
import StudentNav from "./components/studentNav/studentNav";

export default function layout({children}) {
  return (
<div>
<StudentNav/>
<hr/>

{children}

<hr/>
 <Footer/>
    </div>
  )
}
