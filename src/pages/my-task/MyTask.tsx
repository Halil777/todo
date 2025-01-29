import { FC, useState } from "react";
import styles from "./my.task.module.css";
import img from "../../assets/images/images.webp";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "extreme" | "moderate";
  status: "not started" | "in progress";
  createdOn: string;
  objective: string;
  notes: string[];
}

const MyTask: FC = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>("task1");

  const tasks: Task[] = [
    {
      id: "task1",
      title: "Submit Documents",
      description: "Make sure to submit all the necessary documents...",
      priority: "extreme",
      status: "not started",
      createdOn: "20/06/2023",
      objective: "To submit required documents for something important.",
      notes: [
        "Ensure that the documents are authentic and up-to-date.",
        "Maintain confidentiality and security of sensitive information during the submission process.",
        "If there are specific guidelines or deadlines for submission, adhere to them diligently.",
      ],
    },
    {
      id: "task2",
      title: "Complete Assignments",
      description: "The assignments must be completed to pass final year...",
      priority: "moderate",
      status: "in progress",
      createdOn: "21/06/2023",
      objective: "The assignments must be completed to pass final year.",
      notes: [
        "Review each assignment carefully before submitting.",
        "Adhere to the submission guidelines provided by the faculty.",
        "Seek clarification if you face any difficulties in completing assignments.",
      ],
    },
  ];

  const handleTaskSelect = (taskId: string) => {
    setSelectedTaskId(taskId);
  };

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>My Tasks</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={styles.task_container}
            onClick={() => handleTaskSelect(task.id)}
          >
            <div className={styles.task_left_container}>
              <div className={styles.task_header}>
                <input
                  type="radio"
                  name="task"
                  value={task.id}
                  checked={selectedTaskId === task.id}
                  onChange={() => handleTaskSelect(task.id)}
                />
                <h4>{task.title}</h4>
              </div>
              <div className={styles.task_shor_desc}>
                {task.description.slice(0, 30)}...
              </div>
              <div className={styles.task_bottom_container}>
                <p>
                  Priority:
                  <span className={styles.task_priority}>{task.priority}</span>
                </p>
                <p>
                  Status:
                  <span className={styles.task_status}>{task.status}</span>
                </p>
              </div>
            </div>
            <div className={styles.task_right_container}>
              <div className={styles.task_image_container}>
                <img src={img} alt="task picture" />
              </div>
              <div className={styles.created_date_container}>
                <div>
                  <p>Created:</p>
                </div>
                <div>
                  <span>{task.createdOn}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className={`${styles.box} ${styles.task_details_container}`}>
        {selectedTask ? (
          <>
            <div className={styles.task_details_header}>
              <div className={styles.task_details_header_text}>
                <h2>{selectedTask.title}</h2>
                <p>
                  <strong style={{ color: "#4e4e4e" }}>Objective:</strong>{" "}
                  {selectedTask.objective}
                </p>
              </div>
              <div className={styles.task_details_image}>
                <img src={img} alt="task details image" />
              </div>
            </div>

            <div className={styles.task_details_body}>
              <p>
                <strong style={{ color: "#4e4e4e" }}>Task Description:</strong>
                {selectedTask.description}
              </p>
              <p>
                <strong style={{ color: "#4e4e4e" }}>Additional Notes:</strong>
              </p>
              <ul>
                {selectedTask.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
              <p>
                <b>Deadline for Submission:</b> End of Day
              </p>
            </div>
          </>
        ) : (
          <h2>Select a Task to view details</h2>
        )}
      </div>
    </div>
  );
};

export default MyTask;
