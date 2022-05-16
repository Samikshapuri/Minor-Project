const router = require('express').Router();
let Register = require('../models/Register.model');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const { appendFile } = require('fs');

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

// Login Route...
router.post('/login', async (req,res)=>{
    console.log("Login" + req.body);

    try{
        const user = await Register.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if(user){
            
            //JWT Sign In
            const token = jwt.sign({
                username: user.username,
                email : user.email
            }, 'covidPredictorSecret')

            console.log('Logged In successfully!');
            res.json({status: 'ok', user:'true', userToken:token})

        } else{
            res.json({status: 'error', user:'false'})
        }
    } 
    catch(err){
        console.log(err);
        res.json({status: 'error', error: err})
    }
});

router.get('/login', async (req,res)=>{

    const token = req.headers('x-access-token');

    try{
        const decoded = jwt.verify(token, 'covidPredictorSecret');
        const email = decoded.email
    }catch(error){
        console.log(error);
        res.json({status :'error', error:'invalid token'});
    }

});



module.exports = router;