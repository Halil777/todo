import { FC } from "react";
import styles from "./layout.module.css";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout: FC = () => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <div className={styles.sidebar_outlet}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.outlet_container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
