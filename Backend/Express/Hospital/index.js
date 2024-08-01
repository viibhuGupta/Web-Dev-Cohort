import express from "express";

const app = express();
let port = 3000;

const user = [
  {
    name: "Jhon",
    age: "18",
    address: "Bihar,muzaffarpur",
    kineneys: [{ healty: false }, { healty: false }, { healty: true }],
  },
];

app.use(express.json());
app.listen(port, () => {
  console.log(`Listing at post number ${port}`);
});

app.get("/", function (req, res) {
  res.send("Welcome to xyz Hospital");
});

app.get("/jhon", function (req, res) {
  const name = user[0].name;
  let age = user[0].age;
  let address = user[0].address;
  const jhonkideny = user[0].kineneys;
  const noOfKideneys = jhonkideny.length;
  let noOfHealthyKidenys = 0;
  for (let i = 0; i < jhonkideny.length; i++) {
    if (jhonkideny[i].healty) {
      noOfHealthyKidenys += 1;
    }
  }
  const noofUnhealthykedenys = noOfKideneys - noOfHealthyKidenys;
  res.json({
    name,
    age,
    address,
    noOfKideneys,
    noOfHealthyKidenys,
    noofUnhealthykedenys,
  });
});

app.post("/jhon", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kineneys.push({
    healty: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

// chnaging unhelthy kidenys to helthy
app.put("/jhon", function (req, res) {
  if (isThereAtLeatOneUnHealtyKideny()) {
    const noofKidenys = user[0].kineneys;
  for (let i = 0; i < noofKidenys.length; i++) {
    user[0].kineneys[i].healty = true;
  }
  res.json({
    updated: "Done",
  });
  }else{
    res.status(411).json({
      msg:"There is no UnHealthy Kidenys"
    })
  }
});

// deleted unHEalthy kidenys
app.delete("/jhon", function (req, res) {
  if (isThereAtLeatOneUnHealtyKideny()) {
    const newKidenys = [];
  const noofKidenys = user[0].kineneys;
  for (let i = 0; i < noofKidenys.length; i++) {
    if (user[0].kineneys[i].healty) {
      newKidenys.push({
        healty: true,
      });
    }
  }
  user[0].kineneys = newKidenys;
  res.json({
    msg: "unHealthy Kidenys Deleted",
  });
  }
  else{
    res.status(411);
  }
  
});

function isThereAtLeatOneUnHealtyKideny (){
  let isThereAtLeatOneUnHealtyKideny = false;
  for(let i = 0 ; i < user[0].kineneys.length;i++){
    if(!user[0].kineneys[i].healty){
      isThereAtLeatOneUnHealtyKideny=true;
    }
  }  return isThereAtLeatOneUnHealtyKideny;
}
