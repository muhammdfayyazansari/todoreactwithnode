const express = require("express");
const cors = require("cors")
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json()); 
 
 

app.use('/', require('./routes/rootRoute'))
// app.use('/', (req, res)=>{
//   res.status(200).send({
//     data: 'fayyaz ansaseri'
//   })
// })





app.listen(PORT, ()=>{
  console.log(`Your Todo App is running on ${PORT}`)
})


















