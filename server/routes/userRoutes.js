const express = require('express');
const router = express.Router();


router.get("/createUser", (req, res)=>{
  res.status(200).send({
    user : "skeiewfjsdkjfiseifnsi23j12en2ke"
  })
})




module.exports = router;