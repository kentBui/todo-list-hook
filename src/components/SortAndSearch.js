import React, { useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../data/DataDropdown";

function SortAndSearch({ getSearchTerm, getDropdownValue }) {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("Level ASC");

  function handleChangeDropdown(item) {
    setDropdownValue(item);

    if (!getDropdownValue) return;
    getDropdownValue(item);
  }

  function handleSearch(e) {
    let value = e.target.value;
    setSearchValue(value);

    if (!getSearchTerm) return;
    getSearchTerm(value);
  }

  function cancerSearch() {
    setSearchValue("");
    getSearchTerm("");
  }
  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        {/* <!-- SORT : START --> */}
        <div className="col-12">
          <div className="form-group">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {Data.map((item, index) => (
                  <span
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleChangeDropdown(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="badge badge-success badge-medium text-uppercase">
                {dropdownValue}
              </span>
            </div>
          </div>
        </div>
        {/* <!-- SORT : END --> */}

        {/* <!-- SEARCH : START --> */}
        <div className="col-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              value={searchValue}
              onChange={handleSearch}
            />
            <span className="input-group-append">
              <button
                className="btn btn-info"
                type="button"
                onClick={cancerSearch}
              >
                Clear!
              </button>
            </span>
          </div>
        </div>
        {/* <!-- SEARCH : END --> */}
      </div>
    </div>
  );
}

SortAndSearch.propTypes = {
  getSearchTerm: PropTypes.func,
  getDropdownValue: PropTypes.func,
};

SortAndSearch.defaultProps = {
  getSearchTerm: null,
  getDropdownValue: null,
};

export default SortAndSearch;
