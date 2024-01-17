import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        {/* <img src={getImageUrl("about/aboutimg2.png")} alt="About Image" */}
     {/* className={styles.aboutImage}/> */}
    <ul  className={styles.aboutItems}>
        <li  className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon2.png")} alt="cursor icon"
           />
            <div  className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente quo, ex laborum nulla in quasi.</p>
            </div>
        </li>
        <li  className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon2.png")} alt="server icon"/>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente quo, ex laborum nulla in quasi.</p>
            </div>
        </li>
        <li  className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon2.png")} alt="cursor icon"/>
            <div className={styles.aboutItemText}>
                <h3>UI/UX Designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente quo, ex laborum nulla in quasi.</p>
            </div>
        </li>
    </ul>
    </div>
  </section>
};