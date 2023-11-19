"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ConcaveSvg from "@/component/concave-svg/ConcaveSvg";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <nav className={styles.nav}>
          <Image
            className={styles.homeIcon}
            src="/png/home-icon.png"
            alt="kultirat-home-icon"
            width={48}
            height={48}
          />
          <ul className={styles.navMenuUl}>
            <li>About</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Dark Theme</li>
            <li>
              <button className={styles.navResumeBtn}>Resume</button>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.hero}>
        <Image
          className={styles.heroAvatar}
          alt="kultirat-avatar"
          src="/png/avatar-pic.png"
          width={186}
          height={186}
        />
        <h1 className={styles.heroName}>Hi! I’m Kultirat 👋🏻</h1>
        <div className={styles.heroQuote}>
          Building digital products, brands and experiences.
        </div>
        <div className={styles.heroDesc}>
          A UX/UI Designer, Responsive design and web development.
        </div>
      </section>
      <section className={styles.skill}>
        <h2 className={styles.skillTitle}>What I am capable of</h2>
        <p className={styles.skillDesc}>
          I design digital products based on customer insights and UX/UI best
          practices. I help design and built your app and website from scratch
          to launch.
        </p>
        <ConcaveSvg />
      </section>
      <section className={styles.projects}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <div className={styles.projectContainer}>
          <div className={styles.projectCard}>
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>FINNIE</h3>
              <p className={styles.projectDesc}>
                Personal financial planner that help everyone reach your
                financial goals with simple way.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>UX/UI Design</span>
                <span className={styles.projectTag}>Web Development</span>
              </div>
            </div>
            <Image
              alt="finnie"
              src="/png/finnie.png"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
