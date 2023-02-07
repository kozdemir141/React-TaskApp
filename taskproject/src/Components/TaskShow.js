import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleUpdateClick = () => {
    setShowEdit(!showEdit);
    console.log(showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };
  const handleCancel = (value) => {
    setShowEdit(value);
  }
  return (
    <div className="task-show">
      {showEdit ? (
        <div>
          <TaskCreate
            taskFormUpdate={true}
            task={task}
            onUpdate={handleSubmit}
            onCancel = {handleCancel}
          />
        </div>
      ) : (
        <div>
          <h3 className="task-title">Task Title</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Task Description</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-edit" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
