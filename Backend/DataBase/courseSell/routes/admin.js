const express = require('express');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();

// all handle /admin/signup

router.post('/signup',(req,res)=>{
    // signup page 
})

router.post('/courses' ,adminMiddleware, (req,res)=> {

})

router.get('/courses',adminMiddleware,(req , res)=> {
    res.json({
        msg:"hy there"
    })
})

module.exports = router;



