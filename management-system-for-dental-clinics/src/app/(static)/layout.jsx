import "../globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
// import { Montserrat} from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"], 
// weight:['400','800','500']
//  }
// );

export const metadata = {
  title: "Dental Cllinics Website",
  description: "A service site to facilitate communication between students and patients",
};

export default function RootLayout({ children }) {
  return (
    
  

    // <ThemeProvider>
      
      <div className="container">
        <Navbar/>
        <hr/>
        {children}
        <hr/>
        <Footer/>
      </div>
    // </ThemeProvider>

  );
}
