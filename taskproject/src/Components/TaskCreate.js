import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate ,onCancel}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  const handleCancel = (event) => {
    event.preventDefault();
    onCancel(false)
  }
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Please Update a Task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              className="task-input"
              onChange={handleTitleChange}
            />
            <label className="task-label">Enter a Task</label>
            <textarea
              value={taskDesc}
              className="task-input"
              rows={5}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Update
            </button>
            <button className="task-button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Enter a Task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              className="task-input"
              onChange={handleTitleChange}
            />
            <label className="task-label">Enter a Task</label>
            <textarea
              value={taskDesc}
              className="task-input"
              rows={5}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
