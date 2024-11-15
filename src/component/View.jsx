import React from 'react';
import Add from './Add'; // Component to add tasks
import Edit from './Edit'; // Component to edit tasks

const View = () => {
  const userTasks = [
    {
      id: 1,
      title: 'Design Task Dashboard',
      description: 'Create a responsive task management dashboard layout.',
      startDate: '2024-11-01',
      endDate: '2024-11-15',
      status: 'In Progress',
      progress: 75,
    },
    {
      id: 2,
      title: 'Backend Integration',
      description: 'Set up APIs for tasks CRUD operations.',
      startDate: '2024-11-10',
      endDate: '2024-11-20',
      status: 'Pending',
      progress: 0,
    },
  ];

  const deleteTask = (id) => {
    // Function to delete a task
    console.log(`Delete task with ID: ${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">All Tasks</h2>
        <Add /> {/* Component to add new tasks */}
      </div>
      <div className="mt-2">
        {userTasks.length > 0 ? (
          userTasks.map((task) => (
            <div
              key={task.id}
              className="border rounded p-3 d-flex justify-content-between align-items-center mb-3 bg-light shadow-sm"
            >
              <div>
                <h4 className="text-dark mb-1">{task.title}</h4>
                <p className="text-muted mb-2">{task.description}</p>
                <p className="mb-1">
                  <strong>Start:</strong> {task.startDate} | <strong>End:</strong> {task.endDate}
                </p>
                <p className="mb-1">
                  <strong>Status:</strong> <span className="badge bg-info text-white">{task.status}</span>
                </p>
                <p className="mb-0">
                  <strong>Progress:</strong> {task.progress}%
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Edit task={task} /> {/* Component to edit the task */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-muted">No tasks available.</div>
        )}
      </div>
    </>
  );
};

export default View;
