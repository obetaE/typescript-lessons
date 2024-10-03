"use client"
import React from 'react';
import styles from "./Navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



// creating an array that'll contain all our links
const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Courses",
      path: "/courses",
    },
  ];
  

const Navbar = () => {

   const pathName=usePathname();
  //  const isHompage= usePathname === "/" || pathname === '/';

  return (
    <div className={styles.container}>
       <div className={styles.logo}>
        <Image src="/Navbar logo.png" alt="logo" className={styles.logoimg} fill/>       
      </div>
      
      <div className={`${styles.links} `}>
        {links.map(
            link => (
            <Link className={ `${styles.contain} , ${pathName === link.path && styles.active}`} href={link.path} key={link.title}> {link.title} </Link>
            )
        )}
      </div>

    </div>
  )
}

export default Navbar
