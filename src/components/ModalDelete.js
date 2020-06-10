import React from "react";
import PropTypes from "prop-types";
function ModalDelete(props) {
  const { isDelete, cancerDelete, confirmDelete } = props;
  return (
    <>
      {isDelete ? (
        <div className={isDelete ? "modal active" : "modal"}>
          <div className="modal-delete">
            <h3 className="text-center my-3">Do you want to delete?</h3>
            <button className="btn btn-info mr-2" onClick={confirmDelete}>
              Accept
            </button>
            <button className="btn btn-secondary ml-2" onClick={cancerDelete}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

ModalDelete.propTypes = {
  isDelete: PropTypes.bool.isRequired,
  cancerDelete: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

export default ModalDelete;
