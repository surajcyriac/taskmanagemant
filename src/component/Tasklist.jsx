import React from 'react'

const Tasklist = () => {
  return (
    
        <div className="task-list bg-light p-4 rounded shadow-sm">
          <h2 className="text-primary mb-3">Your Tasks</h2>
          <div className="task-item mb-3 p-3 border rounded">
            <h4 className="text-dark">Task 1: Build Task Management App</h4>
            <p className="text-muted">Description: Complete the task management app UI design.</p>
            <p><strong>Start Date:</strong> 2024-11-15</p>
            <p><strong>End Date:</strong> 2024-11-20</p>
            <p><strong>Status:</strong> In Progress</p>
            <p><strong>Progress:</strong> 50%</p>
          </div>
        </div>
      );
    };
    
    

export default Tasklist