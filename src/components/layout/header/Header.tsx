import { FC, useState, useEffect } from "react";
import styles from "./header.module.css";

// Placeholder for notification SVG
const NotificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

// Placeholder for calendar SVG
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <path d="M16 2v4M8 2v4M3 10h18"></path>
  </svg>
);

// Placeholder search SVG Icon
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const Header: FC = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentWeekday, setCurrentWeekday] = useState("");
  const [currentNumericDate, setCurrentNumericDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const weekdayOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
      };
      const numericDateOptions: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      };

      setCurrentWeekday(now.toLocaleDateString("en-US", weekdayOptions));
      setCurrentNumericDate(
        now.toLocaleDateString("en-US", numericDateOptions)
      );
    };

    updateDate();

    const intervalId = setInterval(updateDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>My App Title</h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
        </div>

        <div className={styles.iconsContainer}>
          <span className={styles.iconWrapper}>
            <NotificationIcon />
          </span>
          <span className={styles.iconWrapper}>
            <CalendarIcon />
          </span>
          <div className={styles.dateContainer}>
            <span className={styles.weekday}>{currentWeekday}</span>
            <span className={styles.numericDate}>{currentNumericDate}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
