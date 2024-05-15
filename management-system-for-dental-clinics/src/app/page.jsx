import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <Navbar />
      <hr />
      <div className={styles.container}>
    
        <div className={styles.col}>
          <h1 className={styles.title}>
            Welcome to the Website of Dental Clinics at Al-Baath University{" "}
          </h1>
          <p className={styles.description}>
            A service site to facilitate communication between students and
            patients
          </p>
                </div>

        <div className={styles.col}>
          <Image className={styles.img} src={Hero} alt="Dental Clinics" />
      <div>
            <h5>PATIENT :</h5>

            {user ? (
              <div className={styles.buttoncontainer}>
                <LoginLink
                  postLoginRedirectURL="/patient"
                  className={styles.kindebutton}
                >
                  {" "}
                  Sign in{" "}
                </LoginLink>
                <h3>or</h3>
                <LogoutLink className={styles.kindebutton}>Log Out</LogoutLink>
              </div>
            ) : (
              <div className={styles.buttoncontainer}>
                {/* <LoginLink
                  postLoginRedirectURL="/patient"
                  className={styles.kindebutton}
                >
                  {" "}
                  Sign in{" "}
                </LoginLink>
                <h3>or</h3> */}
                <RegisterLink
                  postLoginRedirectURL="/patient"
                  className={styles.kindebutton}
                >
                  {" "}
                  Sign up{" "}
                </RegisterLink>
              </div>
            )}
          </div>
 
          <div>
            
            <h5>STUDENT :</h5>

            <div className={styles.buttoncontainer}>
              <Link href="/login">
                <button className={styles.button}> Log In </button>
              </Link>
              <h3>or</h3>
              <Link href="/signup">
                <button className={styles.button}> Sign up </button>
              </Link>
            
            </div>
          </div>
        
        </div>
    
      </div>
      <hr /> 
      <Footer />
    </div>
  );
}
