const router = require('express').Router();
let Predictor = require('../models/predictor.model');

router.post('/predictor', (req,res)=>{
    console.log(req.body);

    const newPredictor = new Predictor({
        _id : req.body._id,
        name : req.body.name,
        temp : req.body.temp,
        lower_bp : req.body.lower_bp,
        upper_bp : req.body.upper_bp,
        card_freq : req.body.card_freq,
        spo2 : req.body.spo2
        // fever : req.body.fever,
        // hospital_exp : req.body.hospital_exp,
        // sore_throat : req.body.sore_throat,
        // loss_of_smell: req.body.loss_of_smell,
        // loss_of_taste: req.body.loss_of_taste,
        // musclepain: req.body.musclepain

    })

    newPredictor.save()
        .then(()=>res.json('Predictor added !!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;