import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import './todolist.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";
import { computeHeadingLevel } from "@testing-library/react";



function App() {

  const [myTodos, setMyTodos] = useState([]);
  const [getInputValue, setGetInputValue] = useState('');
  const addItem = (e) => {
    let copyTodoList = [...myTodos];
    copyTodoList.push(getInputValue);
    setMyTodos(copyTodoList);
    console.log(myTodos)
    setGetInputValue('');
    e.preventDefault();
  };
  
  
  const crossTodo = (e, rowIndex)=>{
    console.log(e);
    console.log(rowIndex);
    let copyTodoList = [...myTodos];
    let delItem = <del>{copyTodoList[rowIndex]}</del>
    copyTodoList.splice(rowIndex,1,delItem);
    setMyTodos(copyTodoList)

    
    console.log("delItem", delItem)
    console.log("myTodos", myTodos)
    console.log("copytodolist", copyTodoList)
  
  }

  return (

    <div className="container d-flex flex-column  ">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-4 pt-3">
          <h1 className="text-break">ToDo List</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 bg-img-color  px-sm-5 px-3">
          <div className="row d-flex justify-content-center pb-4 ">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 p-0 ">
              <div className="form-row d-flex align-items-center wrap-nowrap">
                <div className="col-12 col-sm-12">
                  <form onSubmit={addItem} className="d-flex justify-content-between">
                    <input type="text" value={getInputValue} onChange={(e) => {
                      setGetInputValue(e.target.value);
                    }} className="form-control form-control-md" placeholder="Enter Items...."
                    />
                      <button style={{marginLeft:"5px", padding:'10px'}}
                    type="submit"
                    className="btn btn-outline-success text-lead "
                  >

                    <FontAwesomeIcon className="mx-2" onClick={addItem} icon={faSquarePlus}></FontAwesomeIcon>
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
              {myTodos.map((item, index) => {
                // console.log(myTodos)
                return <div key={index} className="form-row d-flex align-items-start wrap-nowrap rounded bck-trans mb-1 pt-1" onClick={e => crossTodo(e,index)}>
                <div className="col-12 col-sm-12 m-0 px-2 text-break py-1" >
                  <span className="text-break text-uppercase text-justify text-light "   >
                    {item}
                  </span>
                </div>
                </div>
          
              })}
            
            </div>
          </div>
        </div>
      </div>
    </div>














  )

}

export default App;


