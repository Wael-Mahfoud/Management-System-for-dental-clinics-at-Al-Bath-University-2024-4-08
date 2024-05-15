"use client"

import styles from "./page.module.css";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import hero from "/public/images/default image.png";
import heroo from "/public/images/emoji.gif";
import React, { useState, useEffect } from "react";
export default function StudentProfile() {

  

  const [ProfileImage, setProfileImage] = useState(() => {
    const savedImage = localStorage.getItem('profileImage');
    return savedImage ? savedImage : hero;
 });

 useEffect(() => {
    // Update the state based on the image saved in local storage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
 }, []);

 const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setProfileImage(imageUrl);
    // Save the image URL in local storage
    localStorage.setItem('profileImage', imageUrl);
 };


  return (
  <div className={styles.container}>
       <div className={styles.col}>
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
            <input type="file" className={styles.button} accept="image" onChange={handleImageChange} ></input>
<button type="submit" className={styles.button}>Save</button>
          </div>
        </div>
        </div>
        <div className={styles.col}>
          
          {ProfileImage&& <Image
            src={ProfileImage}
            width={250}
            height={250}
            alt="student image"
            className={styles.image}
          
/>}
        <div className={styles.hello}>
        <p className={styles.text}>
         Hi Doctor!
         </p>
      <Image
        src={heroo}
        width={50}
        height={50}
        alt="emoji image"
        className={styles.emoji}

/>

      </div>
     </div>

        </div>

  );
}
