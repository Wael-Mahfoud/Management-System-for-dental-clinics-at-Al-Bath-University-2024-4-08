import React from "react";
import styles from "./page.module.css";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import hero from "/public/images/default image.png";
import heroo from "/public/images/emoji.gif";
export default function StudentProfile() {
  return (
    <div>
      <p style={{ position: "relative", left: "899px", top: "60px" }}>
        Hi Doctor!
      </p>
      <Image
        src={heroo}
        width={30}
        height={30}
        alt="emoji image"
        className={styles.emoji}
      />
      <div className={styles.container}>
        <div className={styles.infocontainer}>
          <div style={{ padding: "3px" }}>
            <lable className={styles.title}>Full Name:</lable>
            <lable className={styles.infotitle}></lable>
          </div>
          <div style={{ padding: "3px" }}>
            {" "}
            <lable className={styles.title}> Year:</lable>
            <lable className={styles.infotitle}></lable>
          </div>
          <div style={{ padding: "3px" }}>
            {" "}
            <label className={styles.title}>Your ID:</label>
            <label className={styles.infotitle}></label>
          </div>
          <div style={{ padding: "3px" }}>
            {" "}
            <lable className={styles.title}> University:</lable>
            <lable className={styles.infotitle}></lable>
          </div>
          <div style={{ padding: "3px" }}>
            {" "}
            <lable className={styles.title}> Your Email:</lable>
            <lable className={styles.infotitle}></lable>
          </div>
          <button className={styles.button}>
            Click me to change your email
          </button>
          <button className={styles.button}>
            Click me to change your password
          </button>
          <div>
            <label style={{ color: "black" }}>
              choose your profil picture :
            </label>{" "}
            <br />
            <input type="file" className={styles.button}></input>
          </div>
        </div>

        <div className={styles.col}>
          <Image
            src={hero}
            width={250}
            height={250}
            alt="student image"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
