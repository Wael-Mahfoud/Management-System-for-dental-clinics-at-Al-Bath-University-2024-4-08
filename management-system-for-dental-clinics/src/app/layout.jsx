import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"], 
// weight:['400','800','500','900']
 }
);

export const metadata = {
  title: "Dental Cllinics Website",
  description: "A service site to facilitate communication between students and patients",
};

export default function RootLayout({ children }) {
  return (
    
    // <ClerkProvider>
<html lang="en">
  <body className={inter.className} >
  <ThemeProvider> 
      
      <div className="container">
 
        {/* <hr/> */}
        {children}
        {/* <hr/> */}
     
      </div>
      </ThemeProvider>
 
  </body>
</html>
// </ClerkProvider>
  );
}
