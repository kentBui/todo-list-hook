import React, { useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../data/DataLevel";

function Item({ item, index, saveItem, deleteItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState({
    task: item.task,
    level: "0",
  });

  const { id, task, level } = item;

  // change to edit mode
  function changeToEdit() {
    setIsEdit(true);
  }

  // get todo item after edit
  function handleChangeEdit(e) {
    let key = e.target.name;
    let value = e.target.value;

    setEditItem({ ...editItem, [key]: value });
  }

  // cancer edit
  function cancerEdit() {
    setIsEdit(false);
  }

  // send todo item to App.js after edit
  function saveEdit() {
    let tempItem = { ...editItem, id: id };
    saveItem(tempItem);
    setIsEdit(false);
  }

  function renderEdit() {
    return (
      <tbody>
        <tr>
          <td className="text-center">{index + 1}</td>

          <td>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task"
              value={editItem.task}
              required
              onChange={handleChangeEdit}
            />
          </td>
          <td>
            <select
              name="level"
              className="form-control"
              required="required"
              onChange={handleChangeEdit}
            >
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-primary"
              onClick={saveEdit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancerEdit}
            >
              Cancer
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
  function renderNormal() {
    return (
      <tbody>
        <tr>
          <td className="text-center">{index + 1}</td>
          <td>{task}</td>
          <td className="text-center">
            <span className={`badge ${Data[level].class}`}>
              {Data[level].level}
            </span>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-warning"
              onClick={changeToEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteItem(id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  }

  return <>{isEdit ? renderEdit() : renderNormal()}</>;
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
};

export default Item;
