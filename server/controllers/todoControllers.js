let todoList = [];
let copyDataTodoList = [];


module.exports.createTodo = (req, res) => {
  let data = req.body.todo;
  // console.log("client data >> ", data)
  todoList.push({
    todo : data,
    _id : todoList.length
  });
  res.status(200).send({
    message : "success",
    todos: todoList
  });
}







module.exports.readTodo = (req, res)=>{ 
  res.status(200).send({
    todos : todoList
  })
}


module.exports.deleteAll = (req, res)=>{
  const data = req.body.data;
  copyDataTodoList = [...todoList]
  todoList = [];
  res.status(200).send({
    message: "success",
    todos : todoList
  })

}



