"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBarsProgress } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import styles from "../_styles/header.module.css";
// import { useRouter } from "next/navigation";
const Header = () => {
  //   const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2 className="logo-h2">Fileflow</h2>
      </div>

      <nav
        className={`${
          toggle ? styles.nav : `${styles.nav} ${styles.nav_active}`
        }`}
      >
        <ul className={styles.ul}>
          <li className={styles.li} onClick={handleToggle}>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li className={styles.li} onClick={handleToggle}>
            <Link href="/upload" className="link">
              Upload
            </Link>
          </li>
          <li className={styles.li} onClick={handleToggle}>
            <Link href="/about" className="link">
              About
            </Link>
          </li>
          <li className={styles.hide_li} onClick={handleToggle}>
            <button className="btn">
              <Link href="/getstarted" className="btn-link">
                Get Started
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <button className={`${styles.nav_btn} ${styles.btn}`}>
        <Link href="/getstarted" className="btn-link">
          Get Started
        </Link>
      </button>
      <div onClick={handleToggle} className={styles.icon}>
        {toggle ? (
          <FaBarsProgress className={styles.bars} />
        ) : (
          <IoClose className={styles.close} />
        )}
      </div>
    </header>
  );
};

export default Header;
