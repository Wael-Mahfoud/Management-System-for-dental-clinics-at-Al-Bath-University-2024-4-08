import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import {  Montserrat} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


const montserrat = Montserrat({ subsets: ["latin"], 
weight:['400','800','500','900']
 }
);

export const metadata = {
  title: "Dental Cllinics Website",
  description: "A service site to facilitate communication between students and patients",
};

export default function RootLayout({ children }) {
  return (
    

<html lang="en">
  <body className={montserrat.className} >
  <ThemeProvider> 
      <div className="countainer">
        {children}
        </div>
      
      
      </ThemeProvider>
 
  </body>
</html>
  );
}
