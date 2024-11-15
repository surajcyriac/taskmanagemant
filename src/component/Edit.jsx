import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddTask = ({ addNewTask }) => {
  const [taskDetails, setTaskDetails] = useState({
    heading: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    progress: 0,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTaskDetails({
      heading: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "Pending",
      progress: 0,
    });
  };
  const handleShow = () => setShow(true);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Add New Task
  const handleAddTask = () => {
    const { heading, description, startDate, endDate } = taskDetails;

    if (heading && description && startDate && endDate) {
      addNewTask({ ...taskDetails, id: Date.now() });
      handleClose();
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn btn-primary">
        Edit Task
      </Button>

      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Task Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={taskDetails.heading}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter task heading"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Task Description</label>
                <textarea
                  name="description"
                  value={taskDetails.description}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter task description"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={taskDetails.startDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={taskDetails.endDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  value={taskDetails.status}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Progress (%)</label>
                <input
                  type="number"
                  name="progress"
                  value={taskDetails.progress}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter progress percentage"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTask;
