import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return <section className={styles.container}>
   <div className= {styles.content}>
    <h1 className={styles.title}>
        Hi, I'm Ami
    </h1>
    <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores adipisci fugiat veniam nihil quibusdam quo asperiores nesciunt.</p>
    <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
   </div>
   <div>
    <img src={getImageUrl("hero/newpfp3.png")} alt="Hero Image"
    className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </div>
  </section>
};