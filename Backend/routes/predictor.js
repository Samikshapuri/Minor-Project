const router = require('express').Router();
const fs = require('fs');
let Predictor = require('../models/predictor.model');

// Integrating Python Script
const {spawn} = require('child_process');

router.post('/', (req,res)=>{
    console.log("Hii");
    console.log(req.body);

    const newPredictor = new Predictor({
        _id : req.body._id,
        name : req.body.name,
        temp : req.body.temp,
        lower_bp : req.body.lower_bp,
        upper_bp : req.body.upper_bp,
        card_freq : req.body.card_freq,
        spo2 : req.body.spo2,
        fever : req.body.fever,
        hospital_exp : req.body.hospital_exp,
        sore_throat : req.body.sore_throat,
        loss_of_smell: req.body.loss_of_smell,
        loss_of_taste: req.body.loss_of_taste,
        musclepain: req.body.musclepain
    })

    fs.writeFile('./newPredictor.json', JSON.stringify(newPredictor), err =>{
        if(err){
          console.log(err);
        }
        else{
          console.log("JSON File for predictor data created");
        }
    })

    // Calling Python script
    var dataReceived;
    const python = spawn('python', ['./routes/predictorScript.py']);
    console.log('Python Script called');

    python.stdout.on('data',function(data){
      console.log('Data received from Python script');
      dataReceived = data.toString();
      console.log("kya"+ dataReceived);
    });

    python.stderr.on('data',data=>{
      console.error(`stderr:${data}`);
    });

    python.on('exit',()=>{
      // res.send(dataReceived);
      console.log('Python script closed');
    })

    newPredictor.save()
        .then(()=>res.json('Predictor added !!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;