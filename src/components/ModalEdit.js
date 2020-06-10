import React from "react";

export default function ModalEdit(props) {
  const { isEdit, taskName, saveEdit, cancelEdit, handleChangeEdit } = props;

  return (
    <>
      {isEdit ? (
        <div className={isEdit ? "modal active" : "modal"}>
          <div className="container">
            <div className="col-12 modal-edit py-3 mt-5">
              <h3 className="text-center my-3">Do you want to edit</h3>
              <form
                className="form-inline justify-content-between"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-group">
                  <label className="sr-only">label</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => {
                      handleChangeEdit(e, "taskName");
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only">label</label>
                  <select
                    name="ds"
                    className="form-control"
                    required="required"
                    onChange={(e) => {
                      handleChangeEdit(e, "levelValue");
                    }}
                  >
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                  </select>
                </div>

                <button className="btn btn-info mr-2" onClick={saveEdit}>
                  Save
                </button>
                <button className="btn btn-secondary ml-2" onClick={cancelEdit}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
