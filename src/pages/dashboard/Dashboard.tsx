import { FC } from "react";
import styles from "./dashboard.module.css";

const Dashboard: FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Dashboard Header */}
      <div className={styles.header}>
        <h1>Welcome to Your Dashboard</h1>
        <p>Here’s a quick overview of your tasks and progress</p>
      </div>

      {/* Main Stats Cards */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Total Tasks</h3>
          <p className={styles.cardValue}>120</p>
        </div>
        <div className={styles.card}>
          <h3>Completed Tasks</h3>
          <p className={styles.cardValue}>95</p>
        </div>
        <div className={styles.card}>
          <h3>Pending Tasks</h3>
          <p className={styles.cardValue}>25</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={styles.activityContainer}>
        <h2>Recent Activity</h2>
        <div className={styles.activityFeed}>
          <div className={styles.activityItem}>
            <div className={styles.activityDetails}>
              <h4>Task 1: Complete Documentation</h4>
              <span className={styles.activityDate}>Due: 1st February</span>
            </div>
            <button className={styles.activityButton}>Mark Complete</button>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityDetails}>
              <h4>Task 2: Project Meeting</h4>
              <span className={styles.activityDate}>Due: 5th February</span>
            </div>
            <button className={styles.activityButton}>Mark Complete</button>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityDetails}>
              <h4>Task 3: Code Review</h4>
              <span className={styles.activityDate}>Due: 10th February</span>
            </div>
            <button className={styles.activityButton}>Mark Complete</button>
          </div>
        </div>
      </div>

      {/* Task Progress Chart */}
      <div className={styles.chartContainer}>
        <h2>Task Progress</h2>
        <div className={styles.chartCard}>
          <div className={styles.chartText}>Chart Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
