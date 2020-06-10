import React, { useState } from "react";
import PropTypes from "prop-types";

function FormInputTodo({ handleSubmitForm }) {
  const [isAddTask, setIsAddTask] = useState(false);
  const [todoItem, setTodoItem] = useState({
    task: "",
    level: "0",
  });

  // Change to add task mode
  function addTask() {
    setIsAddTask(true);
  }

  // get value from input and select
  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setTodoItem({
      ...todoItem,
      [key]: value,
    });
  }

  // send todo item to App.js
  function handleSubmit(e) {
    e.preventDefault();

    if (!handleSubmitForm) return;
    handleSubmitForm(todoItem);
    setTodoItem({
      ...todoItem,
      task: "",
    });
  }

  // cancer add task and change to normal mode
  const cancer = () => {
    setIsAddTask(false);
  };

  function renderAddTask() {
    return (
      <>
        {/* ADD TASK : START */}
        <button
          className="btn btn-info btn-block text-capitalize mb-3"
          onClick={addTask}
          disabled
        >
          Please fill and click submit
        </button>
        {/* <!-- ADD TASK : END --> */}

        {/* FORM : START */}
        <form
          className="form-inline justify-content-between"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="sr-only">label</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task"
              value={todoItem.task}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="sr-only">label</label>
            <select
              name="level"
              className="form-control"
              required="required"
              onChange={handleChange}
            >
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={cancer}>
            Cancel
          </button>
        </form>

        {/* <!-- FORM : END --> */}
      </>
    );
  }

  function renderNormal() {
    return (
      <button
        className="btn btn-primary btn-block text-capitalize mb-4"
        onClick={addTask}
      >
        Add Task
      </button>
    );
  }

  return (
    <div className="col-12 col-lg-6">
      <div className="form-group add-task">
        {isAddTask ? renderAddTask() : renderNormal()}
      </div>
    </div>
  );
}

FormInputTodo.propTypes = {
  handleSubmitForm: PropTypes.func,
};

FormInputTodo.defaultProps = {
  handleSubmitForm: null,
};

export default FormInputTodo;
