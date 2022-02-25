const router = require('express').Router();
let Register = require('../models/Register.model');

router.post('/register', async (req,res)=>{
    console.log(req.body);
    try{
        const newRegister = new Register({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
            
        newRegister.save()
            .then(()=>res.json('Register added !!'))
            .catch(err => res.status(400).json('Error: '+err));
    } 
    catch(err){
        console.log(err);
        res.json({status: 'error', error: err})
    }
});

router.post('/login', async (req,res)=>{
    console.log("Login" + req.body);

    try{
        const user = await Register.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if(user){
            console.log('Logged In successfully!')
            res.json({status: 'ok', user:'true'})
        } else{
            res.json({status: 'error', user:'false'})
        }
    } 
    catch(err){
        console.log(err);
        res.json({status: 'error', error: err})
    }
});

module.exports = router;