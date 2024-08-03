// import express from "express";
const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listing at post number ${port}`);
});

// app.get("/", function (req, res) {
//   res.send("Welcome to Int");
// });

app.get("/simple" , (req,res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    
   if (isNaN(principal) || isNaN(rate)|| isNaN(time)) {
    res.send({
        msg:"Invalied Input "
    })
   }
    const intrestAmount = (principal * rate*time) /100;
    const total = principal + intrestAmount;
    // console.log(intrestAmount);
    // console.log(total)

    res.send({
        total: total,
        intrest : intrestAmount
        
    })
})

