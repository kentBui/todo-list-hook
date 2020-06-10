import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function ListItems(props) {
  const { value, todoList, searchTerm, saveItem, deleteItem } = props;

  const renderLists = todoList.filter(
    (item) => item.task.indexOf(searchTerm) !== -1
  );
  switch (value) {
    case "Level ASC":
      renderLists.sort((a, b) => a.level - b.level);
      break;
    case "Level DESC":
      renderLists.sort((a, b) => b.level - a.level);
      break;
    case "Name ASC":
      renderLists.sort((a, b) => a.task.toUpperCase() - b.task.toUpperCase());
      console.log(222);
      break;
    case "Name DESC":
      renderLists.sort((a, b) => b.task.toUpperCase() - a.task.toUpperCase());
      break;
    default:
      break;
  }
  return (
    <div className="col-12 panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        {/* header of table */}
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "160px" }}>Action</th>
          </tr>
        </thead>
        {/* end header of table */}

        {/* render list todo item */}
        {renderLists.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            index={index}
            saveItem={saveItem}
            deleteItem={deleteItem}
          />
        ))}
        {/* end list todo item */}
      </table>
    </div>
  );
}

ListItems.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default ListItems;
