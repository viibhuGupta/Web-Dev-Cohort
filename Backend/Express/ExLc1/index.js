import express from "express";

const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Listing at post number ${port}`);
});

function sum (n){
  let ans = 0;
  for (let index = 0; index <= n; index++) {
   
    ans = ans + index;
    
  } return ans;
}

app.get("/",function (req, res){
  const n = req.query.n;
  const ans = sum(n);
  res.send("hy your ans is : "+ans)
})
