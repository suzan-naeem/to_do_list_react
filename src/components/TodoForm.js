import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoForm extends Component {
  state = {
    newtask: "",
    allTasks: [],
    disaled: true,
    id: 0,
  };

  render() {
    var { allTasks } = this.state;

    const handelTask = (e) => {
      this.setState({
        newtask: e.target.value,
        disaled: false,
      });
      if (e.target.value == "") {
        this.setState({
          disaled: true,
        });
      }
    };

    const addNewTask = (e) => {
      const newTodoList = [...this.state.allTasks];
      newTodoList.push({
        id: this.state.id + 1,
        title: this.state.newtask,
      });
      this.setState({
        allTasks: newTodoList,
        newtask: "",
        disaled: true,
        id: this.state.id + 1,
      });
      e.preventDefault();
    };

    const deleteTask = (myindex) => {
      // const newTodoList = [...this.state.allTasks];
      // newTodoList.splice(index, 1);
      // this.setState({
      //   allTasks: newTodoList,
      // });

      const filterItem = this.state.allTasks.filter(
        (item, index) => index !== myindex
      );
      this.setState({
        allTasks: filterItem,
        id: this.state.id - 1,
      });
      // that mean return all elements whithout the element that has index === index
    };

    const editTask = (myindex) => {
      const newTodoList = [...this.state.allTasks];
      const taskEdit = prompt("Your New Task");
      newTodoList[myindex].title = taskEdit;
      this.setState({
        allTasks: newTodoList,
      });
    };

    return (
      <div>
        <div className="container">
          <form className="todo-form">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Task"
                    name="add-task-input"
                    onChange={handelTask}
                    value={this.state.newtask}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      type="submit"
                      name="add-task-button"
                      onClick={addNewTask}
                      disabled={this.state.disaled}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <TodoList
            allTasks={this.state.allTasks}
            newTask={this.state.newtask}
            deleteTask={deleteTask}
            editTask={editTask}
            id={this.state.id}
          />
        </div>
      </div>
    );
  }
}

export default TodoForm;
