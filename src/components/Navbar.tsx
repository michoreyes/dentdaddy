import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import styles from '../styles/Navbar.module.css'
import dlogo from "../images/dlogo.png"
import dlogolight from "../images/dlogo-light.png"

interface Props {
  variant?: "light" | "dark"
}

export default function Navbar({ variant = "dark"} : Props) {
  const isLight = variant === "light"
  const [open, setOpen] = useState(false);

  return (
    <header className={isLight ? `${styles.headerLight}` : `${styles.headerDark}`}>
      <nav className={styles.container}>
        <a href="/"><img src={isLight ? dlogolight.src : dlogo.src } alt="logo" className={styles.logo} width={120} height={40} loading="eager" fetchPriority="high" /></a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <ul className={`${styles.navlinks} ${open ? `${styles.open}` : ""}`}>
          <li><a href="/service" className={styles.service}>Services <FaRegArrowAltCircleDown size={15}/></a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}