const express = require('express');

const Category = require('../models/category');
const { route } = require('./products');

const router = express.Router();

router.get('/categories', (req, res, next) => {
  Category.find().then(data => res.status(200).json(data));
});

router.post('/categories', (req, res, next) => {
  let newCat = new Category({
    name: req.body.name
  });

  newCat.save((err,contact) =>{
    if(err){
      res.json({msg: 'Failed to add category'});
    }
    else{
      res.json({msg: 'Category added successfully'})
    }
  })
});

router.delete('/categories/:id',(req,res,next) =>{
  Category.remove({_id: req.params.id}, function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

module.exports = router;
