import { useState, useEffect } from "react";
// import { InputGroup } from "react-bootstrap";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../../App.css';
import "./App.css";
// import './todolist.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
  const [myTodos, setMyTodos] = useState("");
  const [getInputValue, setGetInputValue] = useState("");
  // create todo function here
  const addItem = async (e) => {
    e.preventDefault();
    if (!getInputValue) {
      alert("Please Give Some Task!");
    } else {
      try {
        const result = await axios.post(
          "http://localhost:5000/todo/createTodo",
          {
            todo: getInputValue,
          }
        );
        setMyTodos([...result.data.todos]);
        setGetInputValue("");
      } catch (error) {
        console.log("error >>>", error);
      }
    }
  };

  // delete all items  function here
  const deleteAll = async () => {
    console.log("deleteAll");
    try {
        await axios.delete(
        "http://localhost:5000/todo/deleteAll",
        {
          data: "",
        }
      );
      setMyTodos([
        {
          todo: "there is no todo yet",
        },
      ]);
    } catch (error) {
      console.log("deleteAll Error", error);
    }
  };

  const crossTodo = (e, rowIndex) => {
    let elementClasses = e.target.classList;
    let lengthOfClasses = elementClasses.length - 1;
    if (elementClasses[lengthOfClasses] !== "text-decoration-line-through") {
      e.target.classList.add("text-decoration-line-through");
      // console.log('if chalala')
    } else {
      e.target.classList.remove("text-decoration-line-through");
      // console.log("else chala")
    }

    // console.log(e.target);
    // e.target.setAttribute("className","col-12 col-sm-12 m-0 px-2 text-break text-decoration-line-through py-1")
    // console.log(elementClasses[lengthOfClasses])
    // console.log("e ki classes >>>>>>>", e.target.classList.add("text-decoration-line-through"))
    // console.log(rowIndex);

    // let copyTodoList = [...myTodos];
    // let delItem = <del>{copyTodoList[rowIndex]}</del>
    // copyTodoList.splice(rowIndex,1,delItem);
    // setMyTodos(copyTodoList)

    // let copyTodoList = [...myTodos];
    // let delItem = <del>{copyTodoList[rowIndex]}</del>
    // copyTodoList.splice(rowIndex,1,delItem);
    // setMyTodos(copyTodoList)

    // console.log('isCheck >>>>> ', isCheck)
    // console.log("delItem", delItem)
    // console.log("myTodos", myTodos)
    // console.log("copytodolist", copyTodoList)
  };
  useEffect(() => {
    const callMyData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/todo/readTodo");
        // setMyTodos(result.data.todos);
        console.log("fayyaz ansari", result.data.todos);
        if (result.data.todos.length === 0) {
          console.log("data empty hai");
          setMyTodos([
            {
              todo: "there is no todo yet",
            },
          ]);
        } else {
          setMyTodos(result.data.todos);
        }
      } catch (error) {
        setMyTodos("");
        console.log("error >>>", error);
      }
    };
    setMyTodos("");
    callMyData();
  }, []);

  if (!myTodos) {
    return (
      <div className="mainBody">
        <div className="container d-flex flex-column  ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mb-4 pt-3">
              <h1 className="text-break">ToDo List</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 col-sm-10 col-md-8 bg-img-color  px-sm-5 px-3">
              <div className="row d-flex justify-content-center pb-4 ">
                <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0 ">
                  <div className="form-row d-flex align-items-center wrap-nowrap">
                    <div className="col-12 col-sm-12">
                      {/* Input user enter items here */}
                      <form
                        onSubmit={addItem}
                        className="d-flex justify-content-between"
                      >
                        <input
                          type="text"
                          value={getInputValue}
                          onChange={(e) => {
                            setGetInputValue(e.target.value);
                          }}
                          className="form-control form-control-md"
                          placeholder="Enter Items...."
                        />
                        <button
                          style={{ marginLeft: "5px", padding: "10px" }}
                          type="submit"
                          className="btn btn-outline-success text-lead "
                        >
                          {/* <i class="fa-solid fa-square-plus px-1" ></i> */}
                          <FontAwesomeIcon
                            className="mx-2"
                            onClick={addItem}
                            icon={faSquarePlus}
                          />
                        </button>
                        <button
                          style={{ marginLeft: "5px", padding: "10px" }}
                          type="submit"
                          className="btn btn-outline-danger text-lead "
                        >
                          {/* <i class="fa-solid fa-square-plus px-1" ></i> */}
                          <FontAwesomeIcon
                            className="mx-2"
                            onClick={addItem}
                            icon={faTrashCan}
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center pt-1 ">
                <div
                  className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0"
                  id="display"
                >
                  <div className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1">
                    <div className="col-12 col-sm-12 m-0 px-2 d-flex justify-content-center text-break py-1">
                      <Loader />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mainBody">
      <div className="container d-flex flex-column  ">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-4 pt-3">
            <h1 className="text-break">ToDo List</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-sm-10 col-md-8 bg-img-color  px-sm-5 px-3">
            <div className="row d-flex justify-content-center pb-4 ">
              <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0 ">
                <div className="form-row d-flex align-items-center wrap-nowrap">
                  <div className="col-12 col-sm-12 d-flex justify-content-center">
                    {/* Input user enter items here */}
                    <div className="d-inline-block w-100">
                      <form
                        onSubmit={addItem}
                        className="d-flex justify-content-between"
                      >
                        <input
                          type="text"
                          value={getInputValue}
                          onChange={(e) => {
                            setGetInputValue(e.target.value);
                          }}
                          className="form-control form-control-sm mw-100"
                          placeholder="Enter Items...."
                        />
                        <button
                          style={{ marginLeft: "5px", padding: "10px" }}
                          type="submit"
                          className="btn btn-outline-success text-lead "
                        >
                          {/* <i class="fa-solid fa-square-plus px-1" ></i> */}
                          <FontAwesomeIcon
                            className="mx-2"
                            onClick={addItem}
                            icon={faSquarePlus}
                          />
                        </button>
                      </form>
                    </div>
                    <div onClick={deleteAll}>
                      <button
                        style={{ marginLeft: "5px", padding: "10px" }}
                        className="btn btn-outline-danger text-lead "
                      >
                        <FontAwesomeIcon className="mx-2" icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center pt-1 ">
              <div
                className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0"
                id="display"
              >
                {myTodos.map((item, index) => {
                  // console.log(myTodos)
                  return (
                    <div
                      key={index}
                      className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1"
                      onClick={(e) => crossTodo(e, index)}
                    >
                      <div className="col-12 col-sm-12 m-0 px-2 text-break py-1">
                        {/* <span className="text-break text-uppercase text-justify text-light "   > */}
                        {/* {item} */}
                        {item.todo}
                        {/* </span> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
