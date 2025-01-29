import { FC } from "react";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../../utils/data/links";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          {sidebarLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                <span className={styles.icon}>
                  <link.icon />
                </span>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
