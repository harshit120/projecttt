import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.navbartext}> SkillSadhu</p>
      <Link href="/addMenteeForm">
        <button className={styles.buttonNavbar}>Add Mentee</button>
      </Link>
    </div>
  );
};
export default Navbar;
