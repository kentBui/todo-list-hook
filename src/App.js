import React, { useState } from "react";
import Header from "./components/Header";
import SortAndSearch from "./components/SortAndSearch";
import FormInputTodo from "./components/FormInputTodo";
import ListItems from "./components/ListItems";
import ModalDelete from "./components/ModalDelete";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState("Level ASC");

  // get todo item and add to list
  function handleSubmitForm(newTodoItem) {
    let tempItem = { ...newTodoItem, id: uuidv4() };
    setTodoList([...todoList, tempItem]);
  }

  // save todo item when change mode edit
  function saveItem(editedItem) {
    let tempList = [...todoList];
    let index = tempList.findIndex((item) => item.id === editedItem.id);

    tempList.splice(index, 1, editedItem);
    setTodoList(tempList);
  }

  // push delete item
  function deleteItem(id) {
    setIsDelete(true);
    setDeleteId(id);
  }

  // confirm delete
  function confirmDelete() {
    let tempList = [...todoList];
    let arr = tempList.filter((item) => item.id !== deleteId);
    setTodoList(arr);
    setIsDelete(false);
  }

  // cancer delete
  function cancerDelete() {
    setIsDelete(false);
  }

  // get value from input search
  function getSearchTerm(term) {
    setSearchTerm(term);
  }

  // get value from dropdown to sort todo item
  function getDropdownValue(newValue) {
    setValue(newValue);
  }

  // props for SortAndSearch component
  const sortAndSearchProps = {
    getSearchTerm,
    getDropdownValue,
  };

  // props for ListItem component
  const listItemProps = {
    value,
    todoList,
    searchTerm,
    saveItem,
    deleteItem,
  };

  // props for ModalDelete component
  const deleteProps = {
    isDelete,
    cancerDelete,
    confirmDelete,
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <SortAndSearch {...sortAndSearchProps} />
          <FormInputTodo handleSubmitForm={handleSubmitForm} />
          <ListItems {...listItemProps} />
        </div>
      </div>
      <ModalDelete {...deleteProps} />
    </>
  );
}
